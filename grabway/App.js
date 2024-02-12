import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigations from './StackNavigations';
import { ApplicationProvider } from '@ui-kitten/components';
import store from './Store'
import { Provider } from 'react-redux'
import * as eva from '@eva-design/eva';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer
     
    >
        <ApplicationProvider  {...eva} theme={eva.light}>
      <StackNavigations/>
      </ApplicationProvider>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
