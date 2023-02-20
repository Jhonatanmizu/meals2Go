// Components
import SearchInput from "../../../../components/Search";
import RestaurantInfoCard from "../../components/RestaurantInfoCard";
// Styles
import * as S from "./styles";

const RestaurantsScreen = () => {
  return (
    <S.SafeView>
      <S.SearchContainer>
        <SearchInput />
      </S.SearchContainer>
      <S.MainContainer>
        <RestaurantInfoCard />
      </S.MainContainer>
    </S.SafeView>
  );
};

export default RestaurantsScreen;
