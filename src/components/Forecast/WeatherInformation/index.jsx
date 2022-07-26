import React from "react";
import {
  TextBold,
  WeatherDescription,
  WeatherIcon,
  WeatherText,
} from "./style";

const WeatherInfo = ({ title, img, subtitle }) => {
  return (
    <WeatherDescription>
      <TextBold>{title}</TextBold>
      <WeatherIcon>{img}</WeatherIcon>
      <WeatherText>{subtitle}</WeatherText>
    </WeatherDescription>
  );
};

export default WeatherInfo;
