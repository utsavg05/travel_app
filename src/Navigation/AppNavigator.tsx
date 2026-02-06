// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomeScreen from '../screens/HomeScreen';
// import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';
// import DateSelectionScreen from '../screens/DateSelectionScreen';
// import TravelPartyScreen from '../screens/TravelPartyScreen';
// import BookingConfirmedScreen from '../screens/BookingConfirmedScreen';
// import TripsScreen from '../screens/TripsScreen';

// export type RootStackParamList = {
//   Home: undefined;
//   PropertyDetails: undefined;
//   DateSelection: undefined;
//   TravelParty: undefined;
//   BookingConfirmed: undefined;
//   Trips: undefined;
// }

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} />
//       <Stack.Screen name="DateSelection" component={DateSelectionScreen} />
//       <Stack.Screen name="TravelParty" component={TravelPartyScreen} />
//       <Stack.Screen name="BookingConfirmed" component={BookingConfirmedScreen} />
//       <Stack.Screen name="Trips" component={TripsScreen} />
//     </Stack.Navigator>
//   );
// }



import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';
import DateSelectionScreen from '../screens/DateSelectionScreen';
import TravelPartyScreen from '../screens/TravelPartyScreen';
import BookingConfirmedScreen from '../screens/BookingConfirmedScreen';

export type RootStackParamList = {
  Tabs: undefined;
  PropertyDetails: undefined;
  DateSelection: undefined;
  TravelParty: undefined;
  BookingConfirmed: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} />
      <Stack.Screen name="DateSelection" component={DateSelectionScreen} />
      <Stack.Screen name="TravelParty" component={TravelPartyScreen} />
      <Stack.Screen name="BookingConfirmed" component={BookingConfirmedScreen} />
    </Stack.Navigator>
  );
}
