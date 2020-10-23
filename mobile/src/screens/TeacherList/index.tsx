import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'

import { PageHeader } from './../../components/PageHeader'
import { TeacherItem } from '../../components/TeacherItem'
import { api } from '../../services/api'
import { TeacherProps } from '../../components/TeacherItem/TeacherItem.interface'
import { Container, TeacherListItems, SearchForm, Label, Input, InputGroup, InputBlock,
  FilterButton, SubmitButton, SubmitButtonText
} from './style'

export const TeacherList: React.FC = () => {

  const [teachers, setTeachers] = useState([])
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  const handleToggleFiltersVisible = () => {
    setIsFiltersVisible(!isFiltersVisible)
  }

  const handleFilterSubmit = async () => {

    const { data } = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setIsFiltersVisible(false)
    setTeachers(data)
  }

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={ (
          <FilterButton onPress={ handleToggleFiltersVisible }>
            <Feather name="filter" size={ 20 } color="#FFF"/>
          </FilterButton>
        ) }
      >

        { isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input
              placeholder="Qual a matéria"
              value={ subject }
              onChangeText={ setSubject }
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  placeholder="Qual o dia?"
                  value={ week_day }
                  onChangeText={ setWeekDay }
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual horário?"
                  value={ time }
                  onChangeText={ setTime }
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={ handleFilterSubmit }>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        ) }

      </PageHeader>

      <TeacherListItems>

        { teachers.map((teacher: TeacherProps) => (
            <TeacherItem key={ teacher.id } teacher={ teacher }/>
          ))
        }
      </TeacherListItems>
    </Container>
  )
}
