import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';

import { SignIn } from './src/screens/Signin';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';

export default function App() {

  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
      <NativeBaseProvider theme={THEME}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        { fontsLoaded ? <Home /> : <Loading /> }
      </NativeBaseProvider>
  )
}