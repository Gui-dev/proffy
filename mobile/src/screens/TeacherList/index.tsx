import React from 'react'

import { PageHeader } from './../../components/PageHeader'
import { TeacherItem } from '../../components/TeacherItem'
import { Container, TeacherListItems } from './style'

export const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis">

      </PageHeader>

      <TeacherListItems>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeacherListItems>
    </Container>
  )
}
