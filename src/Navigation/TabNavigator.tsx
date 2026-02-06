import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import TripsScreen from '../screens/TripsScreen';
import { colors } from '../constants/theme';
import ProfileScreen from '../screens/ProfileScreen';
import { useMemo } from 'react';
import { Text } from 'react-native';
import ExploreScreen from '../screens/ExploreScreen';
import SavedTripsScreen from '../screens/SavedTripsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.cardBackground,
          borderTopColor: colors.border,
          height: 62,
          paddingTop: 10,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
      name='ExploreTab'
      component={ExploreScreen}
      options={{
        tabBarIcon: ({color} ) => (
            <MaterialIcons name='explore' size={24} color={color} />
        )
      }}
      />

      <Tab.Screen
        name="TripsTab"
        component={TripsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="luggage" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="SavedTab"
        component={SavedTripsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-border" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

/* Temporary placeholder */
function DummyScreen() {
  return null;
}
