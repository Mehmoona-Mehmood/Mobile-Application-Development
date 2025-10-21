import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import PretWinterScreen from '../screens/Winter/PretWinterScreen';
import UnstitchedWinterScreen from '../screens/Winter/UnstitchedWinterScreen';
import PretSummerScreen from '../screens/Summer/PretSummerScreen';
import UnstitchedSummerScreen from '../screens/Summer/UnstitchedSummerScreen';
import MenPerfumeScreen from '../screens/Perfumes/MenPerfumeScreen';
import WomenPerfumeScreen from '../screens/Perfumes/WomenPerfumeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="MainTabs"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ff6b6b',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavigator} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="PretWinter" 
          component={PretWinterScreen} 
          options={{ title: 'Winter Pret Collection' }}
        />
        <Stack.Screen 
          name="UnstitchedWinter" 
          component={UnstitchedWinterScreen} 
          options={{ title: 'Winter Unstitched Collection' }}
        />
        <Stack.Screen 
          name="PretSummer" 
          component={PretSummerScreen} 
          options={{ title: 'Summer Pret Collection' }}
        />
        <Stack.Screen 
          name="UnstitchedSummer" 
          component={UnstitchedSummerScreen} 
          options={{ title: 'Summer Unstitched Collection' }}
        />
        <Stack.Screen 
          name="MenPerfume" 
          component={MenPerfumeScreen} 
          options={{ title: 'Men Perfumes' }}
        />
        <Stack.Screen 
          name="WomenPerfume" 
          component={WomenPerfumeScreen} 
          options={{ title: 'Women Perfumes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
