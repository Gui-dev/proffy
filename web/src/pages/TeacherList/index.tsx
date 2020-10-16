import React, { FormEvent, useState } from 'react'

import { PageHeader } from './../../components/PageHeader'
import { TeacherItem, TeacherProps } from './../../components/TeacherItem'
import { Input } from './../../components/Input'
import { Select } from '../../components/Select'
import { api } from '../../services/api'
import { Container, Form, Main } from './style'

export const TeacherList: React.FC = () => {

  const [teachers, setTeachers] = useState([])
  const [ subject, setSubject ] = useState('')
  const [ week_day, setWeekDay ] = useState('')
  const [ time, setTime ] = useState('')

  const handleSearchTeacher = async (event: FormEvent) => {
    event.preventDefault()
    const { data } = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(data)
  }

  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form onSubmit={ handleSearchTeacher }>
          <Select
              name="subject"
              label="Matéria"
              value={ subject }
              onChange={ e => setSubject(e.target.value) }
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
              value={ week_day }
              onChange={ e => setWeekDay(e.target.value) }
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
          <Input
            type="time"
            name="time"
            label="Hora"
            value={ time }
            onChange={ e => setTime(e.target.value) }
          />

          <button type="submit">Buscar</button>
        </Form>
      </PageHeader>

      <Main>
        { teachers.map((teacher: TeacherProps) => {
          return <TeacherItem key={ teacher.id } teacher={ teacher }/>
        }) }
      </Main>
    </Container>
  )
}
