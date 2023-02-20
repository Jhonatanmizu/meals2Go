import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
// Components
import RestaurantsScreen from "./src/features/restaurants/screens/RestaurantsScreen";
// Theme
import theme from "./src/infrastructure/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <StatusBar translucent barStyle={"default"} />
    </>
  );
};
export default App;
