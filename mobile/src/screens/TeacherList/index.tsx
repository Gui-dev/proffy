import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'

import { PageHeader } from './../../components/PageHeader'
import { TeacherItem } from '../../components/TeacherItem'
import { Container, TeacherListItems, SearchForm, Label, Input, InputGroup, InputBlock,
  FilterButton, SubmitButton, SubmitButtonText
} from './style'

export const TeacherList: React.FC = () => {

  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  const handleToggleFiltersVisible = () => {
    setIsFiltersVisible(!isFiltersVisible)
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
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  placeholder="Qual o dia?"
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual horário?"
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        ) }

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
