import React, { useEffect, useState } from "react";
import { Container, Title } from "./styles";
import CurrentWeather from "../../components/CurrentWeather";
import { geoLocation } from "../../api/GeoLocation";
import { openWeather } from "../../api/OpenWeather";
import DailyWeather from "../../components/DailyWeather";
import Button from "../../components/Button";

const ForecastScreen = () => {
  const [currentWeather, setCurrentWeather] = useState<Weather.daily>();
  const [dailyWeather, setDailyWeather] = useState<Weather.daily[]>();
  const [loading, setLoading] = useState(true);

  const getWeather = async () => {
    setLoading(true);
    try {
      const { city, lat, lon } = await geoLocation();
      const data = await openWeather(lat, lon, "minutely", "metric", "pt_br");

      setCurrentWeather({
        ...data.daily[0],
        curr_temp: data.current.temp,
        curr_feels_like: data.current.feels_like,
        visibility: data.current.visibility,
        city,
      });

      setDailyWeather(data.hourly.slice(0, 4));
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      throw new Error("Erro:" + error.message);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  if (loading || !currentWeather || !dailyWeather) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    );
  }

  return (
    <Container>
      <CurrentWeather data={currentWeather} />
      <DailyWeather data={dailyWeather} />

      <Button onPress={() => getWeather()} text="Recarregar" />
    </Container>
  );
};

export default ForecastScreen;
