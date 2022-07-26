import React from "react";
import { TimeLineNav, TimeLineInfo, ActiveTitle, Title } from "./style";

const TimeInfo = () => {
  return (
    <TimeLineInfo>
      <TimeLineNav>
        <ActiveTitle>Timeline</ActiveTitle>
        <Title>Week</Title>
      </TimeLineNav>
    </TimeLineInfo>
  );
};

export default TimeInfo;
