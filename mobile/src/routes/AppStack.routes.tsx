import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Landing } from './../screens/Landing'
import { GiveClasses } from './../screens/GiveClasses'

export const AppStack: React.FC = () => {

  const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false
      }}>
        <Screen name="Landing" component={ Landing }/>
        <Screen name="GiveClasses" component={ GiveClasses }/>
      </Navigator>
    </NavigationContainer>
  )
}
