import { StatusBar } from "react-native";
// Components
import RestaurantsScreen from "./src/features/restaurants/screens/RestaurantsScreen";

const App = () => {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar translucent barStyle={"default"} />
    </>
  );
};
export default App;
