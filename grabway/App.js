import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigations from './StackNavigations';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
export default function App() {
  return (
    <NavigationContainer>
        <ApplicationProvider  {...eva} theme={eva.light}>
      <StackNavigations/>
      </ApplicationProvider>
    </NavigationContainer>
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
