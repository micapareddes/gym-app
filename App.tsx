import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

import { THEME } from 'src/theme';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({Poppins_700Bold, Roboto_400Regular, Roboto_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading/>}
    </NativeBaseProvider>
  );
}