import styled from "styled-components";
import { StatusBar } from "react-native";

const barHeight = StatusBar.currentHeight;

const SafeView = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  ${barHeight && `margin-top:${barHeight}px;`}
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
  width: 100%;
`;

const MainContainer = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;

export { SafeView, SearchContainer, MainContainer };
