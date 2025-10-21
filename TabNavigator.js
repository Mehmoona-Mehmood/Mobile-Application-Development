import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import WinterScreen from '../screens/WinterScreen';
import SummerScreen from '../screens/SummerScreen';
import PerfumesScreen from '../screens/PerfumesScreen';
import SaleScreen from '../screens/SaleScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Winter') {
            iconName = focused ? 'snow' : 'snow-outline';
          } else if (route.name === 'Summer') {
            iconName = focused ? 'sunny' : 'sunny-outline';
          } else if (route.name === 'Perfumes') {
            iconName = focused ? 'flower' : 'flower-outline';
          } else if (route.name === 'Sale') {
            iconName = focused ? 'pricetag' : 'pricetag-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff6b6b',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#ff6b6b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Winter" component={WinterScreen} />
      <Tab.Screen name="Summer" component={SummerScreen} />
      <Tab.Screen name="Perfumes" component={PerfumesScreen} />
      <Tab.Screen name="Sale" component={SaleScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
