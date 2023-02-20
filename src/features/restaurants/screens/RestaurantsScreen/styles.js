import styled from "styled-components";
import { StatusBar } from "react-native";

const barHeight = StatusBar.currentHeight;

const SafeView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  ${barHeight && `margin-top:${barHeight}px;`}
  background-color: "#f2f2f2";
`;

const SearchContainer = styled.View`
  padding: 16px;
  width: 100%;
`;

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px;
`;

export { SafeView, SearchContainer, MainContainer };
