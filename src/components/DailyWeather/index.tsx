import React from "react";
import { Box, Card, Container, Icon, ScrollBox, Text, Title } from "./styles";
import { timestampToHour } from "../../utils/timestampToHour";

interface DailyWeatherProps {
  data: Weather.daily[];
}

const DailyWeather = ({ data }: DailyWeatherProps) => {
  const weatherIcons: { [key: string]: any } = {
    Clear: require("../../assets/Clear.png"),
    Clouds: require("../../assets/Clouds.png"),
    // Rain: require("../../assets/Rain.png"),
    Snow: require("../../assets/Snow.png"),
    // Thunderstorm: require("../../assets/Thunderstorm.pnga"),
    // Drizzle: require("../../assets/Drizzle.png"),
    // Mist: require("../../assets/Mist.png"),
  };
  const iconSource =
    weatherIcons[data[0].weather[0].main] || weatherIcons["Clear"];

  return (
    <Container>
      <Title>Hoje</Title>
      <ScrollBox horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((day, index) => (
          <Box key={index}>
            <Card>
              <Icon source={iconSource} />
            </Card>
            <Text>{timestampToHour(day.dt)}</Text>
          </Box>
        ))}
      </ScrollBox>
    </Container>
  );
};

export default DailyWeather;
