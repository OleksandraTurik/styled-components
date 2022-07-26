import React from "react";
import Search from "../Search";
import { AiFillPlusCircle, AiFillCloud } from "react-icons/ai";
import {
  CurrentlyWeather,
  FirstFlexContainer,
  Title,
  Info,
  CursiveText,
  IconToday,
  Circle,
  Text,
  PictureContainer,
  Icon,
  City,
  Image,
} from "./style";
import photo from "../../assets/madrid.jpg";

const CurrentDay = () => {
  return (
    <FirstFlexContainer>
      <CurrentlyWeather>
        <Info>
          <Search />
          <Title>Thursday</Title>
          <CursiveText>'scattered clouds'</CursiveText>
          <IconToday>
            <AiFillCloud />
          </IconToday>
        </Info>
        <Circle>
          <Text>23°</Text>
        </Circle>
        <PictureContainer>
          <Icon>
            <AiFillPlusCircle />
          </Icon>
          <City>Madrid (ES)</City>
          <Image src={photo} alt="Madrid"></Image>
        </PictureContainer>
      </CurrentlyWeather>
    </FirstFlexContainer>
  );
};

export default CurrentDay;
