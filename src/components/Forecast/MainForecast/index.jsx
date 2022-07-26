import React from "react";
import Navigation from "../../Navigation";
import TimeInfo from "../TimeInfo";
import UpcomingForecast from "../UpcomingWeekForecast";
import { SecondContainer } from "./style";

const MainForecast = () => {
  return (
    <SecondContainer>
      <Navigation />
      <TimeInfo />
      <UpcomingForecast />
    </SecondContainer>
  );
};

export default MainForecast;
