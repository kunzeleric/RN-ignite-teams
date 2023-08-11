import { StatusBar } from "react-native";
import { Loading } from "@components/Loading";
import { ThemeProvider } from "styled-components";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import theme from "./src/theme";
import { Routes } from "./src/routes";

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
      {hasLoadedFonts ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
