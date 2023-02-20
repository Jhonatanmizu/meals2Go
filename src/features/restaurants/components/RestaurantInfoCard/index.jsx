// Styles
import * as S from "./styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <S.RestaurantCard elevation={5}>
      <S.RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <S.Title>{name}</S.Title>
    </S.RestaurantCard>
  );
};

export default RestaurantInfoCard;
