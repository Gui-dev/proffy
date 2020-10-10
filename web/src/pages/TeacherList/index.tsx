import React from 'react'

import { PageHeader } from './../../components/PageHeader'
import { TeacherItem } from './../../components/TeacherItem'
import { Input } from './../../components/Input'
import { Container, Form, Main } from './style'

export const TeacherList: React.FC = () => {
  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <Input name="subject" label="Matéria"/>
          <Input name="week-day" label="Dia da semana"/>
          <Input type="time" name="time" label="Hora"/>
        </Form>
      </PageHeader>

      <Main>
        <TeacherItem />
      </Main>
    </Container>
  )
}
