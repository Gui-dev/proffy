import React from 'react'

import { PageHeader } from './../../components/PageHeader'
import { TeacherItem } from './../../components/TeacherItem'
import { Container, Form, InputBlock, Main } from './style'

export const TeacherList: React.FC = () => {
  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <InputBlock>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" className="subject"/>
          </InputBlock>

          <InputBlock>
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" className="week-day"/>
          </InputBlock>

          <InputBlock>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" className="time"/>
          </InputBlock>
        </Form>
      </PageHeader>

      <Main>
        <TeacherItem />
      </Main>
    </Container>
  )
}
