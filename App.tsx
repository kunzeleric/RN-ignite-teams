import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";
import theme from "./src/theme";
import { StatusBar } from "react-native";

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {hasLoadedFonts ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
