import Principal from './components/principal';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Calculadora"
              component={Principal}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
