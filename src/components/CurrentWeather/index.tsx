import React from "react";
import {
  Box,
  City,
  Container,
  CurrentBox,
  DaysBox,
  Icon,
  InfoBox,
  InfoText,
  InfoTitle,
  Temperature,
  Weather,
} from "./styles";
import { timestampToDate } from "../../utils/timestampToDate";
import { formatUVI } from "../../utils/uvi";

interface CurrentWeatherProps {
  data: Weather.daily;
}

const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  console.log(data);
  const weatherIcons: { [key: string]: any } = {
    Clear: require("../../assets/Clear.png"),
    Clouds: require("../../assets/Clouds.png"),
    // Rain: require("../../assets/Rain.png"),
    Snow: require("../../assets/Snow.png"),
    // Thunderstorm: require("../../assets/Thunderstorm.png"),
    // Drizzle: require("../../assets/Drizzle.png"),
    // Mist: require("../../assets/Mist.png"),
  };
  const iconSource =
    weatherIcons[data.weather[0].main] || weatherIcons["Clear"];
  return (
    <Container>
      <CurrentBox>
        <Box>
          <Temperature>{Math.round(data.curr_temp)}°C</Temperature>
          <City>{data.city.split(",")[0]}</City>
          <Weather>
            {timestampToDate(data.dt)} - {Math.round(data.temp.min)}°C/
            {Math.round(data.temp.max)}°C
          </Weather>
        </Box>

        <Box>
          <Icon source={iconSource} />
          <Weather>{data.weather[0].description.toUpperCase()}</Weather>
        </Box>
      </CurrentBox>
      <DaysBox>
        <InfoBox>
          <Box>
            <InfoTitle>Pressão</InfoTitle>
            <InfoText>{data.pressure}hPa</InfoText>
          </Box>
          <Box>
            <InfoTitle>Precipitação</InfoTitle>
            <InfoText>{data.rain} mm</InfoText>
          </Box>
          <Box>
            <InfoTitle>Umidade</InfoTitle>
            <InfoText>{data.humidity} %</InfoText>
          </Box>
        </InfoBox>

        <InfoBox>
          <Box>
            <InfoTitle>Sensação</InfoTitle>
            <InfoText>{Math.round(data.curr_feels_like)} °C</InfoText>
          </Box>
          <Box>
            <InfoTitle>Ventos</InfoTitle>
            <InfoText>{Math.round(data.wind_speed)} Km/h</InfoText>
          </Box>
          <Box>
            <InfoTitle>Visibilidade</InfoTitle>
            <InfoText>{Math.round(data.visibility / 1000)} Km</InfoText>
          </Box>
        </InfoBox>
      </DaysBox>
    </Container>
  );
};

export default CurrentWeather;
