import { FlatList, StyleSheet } from "react-native";
// Components
import SearchInput from "../../../../components/Search";
import Spacer from "../../../../components/Spacer";
import RestaurantInfoCard from "../../components/RestaurantInfoCard";
// Styles
import * as S from "./styles";

const RestaurantsScreen = () => {
  return (
    <S.SafeView>
      <S.SearchContainer>
        <SearchInput />
      </S.SearchContainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer variant="bottomLarge">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
      />
    </S.SafeView>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  list: { padding: 16 },
});
