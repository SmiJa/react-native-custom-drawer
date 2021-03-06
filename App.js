import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
// import AuthStack from './src/navigation/AuthStack';
import 'react-native-gesture-handler';
import AppStack from './src/navigation/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack/>
      {/* <AuthStack/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
