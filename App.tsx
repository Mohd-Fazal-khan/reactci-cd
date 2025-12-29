import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FlyerScreen from "./src/FlyerScreen";
import FirstScreen from "./src/FirstScreen";
// import FlyerScreen from "./src/Flyerscreen";
// import ReferralScreen from "./src/ReferralScreen"; // Add ReferralScreen

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: [
    "demo://",                   // Custom scheme
    // "https://demolinks.vercel.app"
    "https://demolinks-ten.vercel.app" // HTTP redirect links
  ],
  config: {
    screens: {
      // FirstScreen: "first",                   // optional deep link
      FlyerScreen: "flyer/:flyerId/:productId",
      // ReferralScreen: "refer/:refCode",
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="FlyerScreen" component={FlyerScreen} />
        {/* <Stack.Screen name="ReferralScreen" component={ReferralScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
