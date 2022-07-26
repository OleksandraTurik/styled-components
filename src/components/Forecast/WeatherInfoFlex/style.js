import styled from "styled-components";

export const InfoFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  width: 260px;
  margin-bottom: 10px;
  gap: 15px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
`;
export const TemperatureToday = styled.div`
  width: 126px;
`;
export const Icon = styled.i`
  font-size: 30px;
  margin-bottom: 20px;
  display: block;
`;
export const P = styled.p`
  color: #3e5681;
  font-size: 18px;
  font-weight: bold;
`;

export const TemperatureTodayColor = styled.div`
  background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
  height: 100%;
  width: 126px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
