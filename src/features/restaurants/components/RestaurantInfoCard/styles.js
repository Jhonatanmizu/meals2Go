import { Card, Text } from "react-native-paper";
// Styles
import styled from "styled-components/native";

const Title = styled(Text)`
  padding: ${({ theme }) => theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.ui.quaternary};
  width: 100%;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export { Title, RestaurantCard, RestaurantCardCover };
