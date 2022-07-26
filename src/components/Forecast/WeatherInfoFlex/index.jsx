import React from "react";
import {
  Icon,
  InfoFlex,
  P,
  TemperatureToday,
  TemperatureTodayColor,
} from "./style";

const WeatherInfoFlex = ({ imgFirst, titleFirst, imgSecond, titleSecond }) => {
  return (
    <InfoFlex>
      <TemperatureToday>
        <Icon>{imgFirst}</Icon>
        <P>{titleFirst}</P>
      </TemperatureToday>
      <TemperatureTodayColor>
        <Icon>{imgSecond}</Icon>
        <P>{titleSecond}</P>
      </TemperatureTodayColor>
    </InfoFlex>
  );
};

export default WeatherInfoFlex;
