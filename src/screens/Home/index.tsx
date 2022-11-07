import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreens} from '@app/types/navigation';
import ImageComponent from '@app/components/ImageComponent';

import HomeTab from './Home/Home';
import ProfileTab from './Profile';
import CartTab from './Cart';

const Tab = createBottomTabNavigator<HomeScreens>();

export default function HomeScreen() {
  return (
    <Tab.Navigator sceneContainerStyle={styles.tabContainer}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarIcon: ({size}) => (
            <ImageComponent
              image="home_icon"
              style={{width: size, height: size}}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          tabBarIcon: ({size}) => (
            <ImageComponent
              image="user_profile_icon"
              style={{width: size, height: size}}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartTab}
        options={{
          tabBarIcon: ({size}) => (
            <ImageComponent
              image="cart_icon"
              style={{width: size, height: size}}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#ffffff',
  },
});
