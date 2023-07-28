import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { ActivityIndicator } from 'react-native'
import theme from './src/theme'


export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      {
        hasLoadedFonts ? <Groups /> : <ActivityIndicator />
      }
    </ThemeProvider>
  );
}
