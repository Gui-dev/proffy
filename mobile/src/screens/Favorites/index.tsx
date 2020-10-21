import React from 'react'

import { PageHeader } from '../../components/PageHeader'
import { TeacherItem } from '../../components/TeacherItem'
import { Container, FavoritesListItems } from './style'

export const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos"/>

      <FavoritesListItems>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </FavoritesListItems>
    </Container>
  )
}
