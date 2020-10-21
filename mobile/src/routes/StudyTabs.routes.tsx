import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TeacherList } from './../screens/TeacherList'
import { Favorites } from './../screens/Favorites'

export const StudyTabs: React.FC = () => {

  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontSize: 13,
          fontFamily: 'Archivo_700Bold',
          marginLeft: 16
        },
        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#EBEBF5',
        inactiveTintColor: '#C1BCCC',
        activeTintColor: '#32264D'
      }}
    >
      <Screen
        name="TeacherList"
        component={ TeacherList }
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) =>
            <Ionicons name="ios-easel" size={ size } color={ focused ? '#8257E5' : color }/>
        }}
      />
      <Screen
        name="Favorites"
        component={ Favorites }
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) =>
            <Ionicons name="ios-heart" size={ size } color={ focused ? '#8257E5' : color }/>
        }}
      />
    </Navigator>
  )
}
