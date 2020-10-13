import React from 'react'

import { PageHeader } from './../../components/PageHeader'
import { TeacherItem } from './../../components/TeacherItem'
import { Input } from './../../components/Input'
import { Select } from '../../components/Select'
import { Container, Form, Main } from './style'

export const TeacherList: React.FC = () => {
  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <Select
              name="subject"
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação física', label: 'Educação física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
                { value: 'Inglês', label: 'Inglês' }
              ]}
            />
          <Select
              name="week_day"
              label="Dia da semana"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda' },
                { value: '2', label: 'Terça' },
                { value: '3', label: 'Quarta' },
                { value: '4', label: 'Quinta' },
                { value: '5', label: 'Sexta' },
                { value: '6', label: 'Sábado' }
              ]}
            />
          <Input type="time" name="time" label="Hora"/>
        </Form>
      </PageHeader>

      <Main>
        <TeacherItem />
      </Main>
    </Container>
  )
}
