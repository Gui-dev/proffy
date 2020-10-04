import React from 'react'

import { PageHeader } from './../../components/PageHeader'
import { Container } from './style'

export const TeacherList: React.FC = () => {
  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis."/>
    </Container>
  )
}
