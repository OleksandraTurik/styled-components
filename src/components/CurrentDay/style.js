import styled from "styled-components";

export const FirstFlexContainer = styled.div`
  max-width: 330px;
`;
export const CurrentlyWeather = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(45, 39, 39);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(45, 39, 39);
  border-top-left-radius: 20px;
`;
export const Title = styled.h1`
  color: white;
  font-size: 30px;
  text-align: center;
  margin: 0;
`;
export const Circle = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  margin-bottom: 10px;
`;
export const PictureContainer = styled.div`
  position: relative;
`;
export const IconToday = styled.i`
  font-size: 150px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  color: rgb(181, 198, 210);
`;
export const Text = styled.span`
  background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
  font-size: 35px;
  padding: 20px 12px 20px 20px;
  border-radius: 60%;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: -50px;
`;
export const CursiveText = styled.i`
  font-size: 14px;
  color: white;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 50px;
`;
export const Icon = styled.i`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
`;
export const City = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom-left-radius: 20px;
`;
