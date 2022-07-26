import React from "react";
import {
  Icon,
  Temp,
  Time,
  TemperatureDescription,
} from "../TemperatureBlock/style";

const TemperatureBlock = ({ img, temp, time }) => {
  return (
    <TemperatureDescription>
      <Icon>{img}</Icon>
      <Temp>{temp}</Temp>
      <Time>{time}</Time>
    </TemperatureDescription>
  );
};

export default TemperatureBlock;
