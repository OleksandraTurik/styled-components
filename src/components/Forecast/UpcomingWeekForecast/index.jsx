import React from "react";
import {
  BsFillSunFill,
  BsFillCloudLightningFill,
  BsFillDropletFill,
} from "react-icons/bs";
import { TiWeatherSnow } from "react-icons/ti";
import {
  FaTemperatureHigh,
  FaTemperatureLow,
  FaWeight,
  FaWind,
} from "react-icons/fa";
import { AiFillCloud } from "react-icons/ai";
import { GoClock } from "react-icons/go";
import TemperatureBlock from "../../TemperatureBlock";
import WeatherInfoFlex from "../WeatherInfoFlex";
import WeatherInfo from "../WeatherInformation";
import { TimeLineContainer, Highlight, ForecastContainer } from "./style";

const UpcomingForecast = () => {
  return (
    <>
      <TimeLineContainer>
        <TemperatureBlock img={<BsFillSunFill />} time="09:00" temp="23°" />
        <TemperatureBlock img={<BsFillSunFill />} time="18:00" temp="23°" />
        <TemperatureBlock
          img={<BsFillCloudLightningFill style={{ color: "gray" }} />}
          time="09:00"
          temp="27°"
        />
        <TemperatureBlock img={<BsFillSunFill />} time="19:00" temp="32°" />
        <TemperatureBlock
          img={<TiWeatherSnow style={{ color: "#323271" }} />}
          time="20:00"
          temp="-10°"
        />
      </TimeLineContainer>
      <Highlight>Today's highlights</Highlight>
      <ForecastContainer>
        <WeatherInfo
          title="Humidity"
          img={<BsFillDropletFill style={{ color: "#323271" }} />}
          subtitle="31%"
        />
        <WeatherInfo
          title="Pressure"
          img={<FaWeight style={{ color: "#535375" }} />}
          subtitle="31%"
        />
        <WeatherInfoFlex
          imgFirst={<FaTemperatureHigh style={{ color: "#921414" }} />}
          titleFirst="10°"
          imgSecond={<FaTemperatureLow style={{ color: "blue" }} />}
          titleSecond="33°"
        />
        <WeatherInfo
          title="Cloud Coverage"
          img={<AiFillCloud style={{ color: "gray" }} />}
          subtitle="31%"
        />
        <WeatherInfo
          title="Wind Speed"
          img={<FaWind style={{ color: "#0c547b" }} />}
          subtitle="31%"
        />
        <WeatherInfoFlex
          imgFirst={<GoClock style={{ color: "orange" }} />}
          titleFirst="6:58"
          imgSecond={<GoClock style={{ color: "orange" }} />}
          titleSecond="21:43"
        />
      </ForecastContainer>
    </>
  );
};

export default UpcomingForecast;
