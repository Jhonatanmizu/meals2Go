import { Card, Text } from "react-native-paper";
// Styles
import styled from "styled-components/native";

const Title = styled(Text)`
  padding: 16px;
`;
const RestaurantCard = styled(Card)`
  background-color: "#fff";
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: "#fff";
`;

export { Title, RestaurantCard, RestaurantCardCover };
