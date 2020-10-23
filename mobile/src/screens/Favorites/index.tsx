import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import { PageHeader } from '../../components/PageHeader'
import { TeacherItem } from '../../components/TeacherItem'
import { TeacherProps } from '../../components/TeacherItem/TeacherItem.interface'
import { Container, FavoritesListItems } from './style'

export const Favorites: React.FC = () => {

  const [favorites, setFavorites] = useState([])

  const loadFavorites = async () => {
    const response = await AsyncStorage.getItem('favorites')

    if (response) {
      const favoritedTeachers = JSON.parse(response)
      setFavorites(favoritedTeachers)
    }
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos"/>

      <FavoritesListItems>

        { favorites.map((teacher: TeacherProps) => (
          <TeacherItem
            key={ teacher.id }
            teacher={ teacher }
            favorited
          />
        )) }

      </FavoritesListItems>
    </Container>
  )
}
