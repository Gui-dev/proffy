import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { PageHeader } from './../../components/PageHeader'
import { Input } from './../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Select } from '../../components/Select'
import warningIcon from './../../assets/images/icons/warning.svg'
import { api } from '../../services/api'
import { Container, Main, Form } from './style'

export const TeacherForm: React.FC = () => {

  const history = useHistory()
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')
  const [ scheduleItems, setScheduleItems ] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }

  const setScheduleItemValue = (position: number, field: string, value: string) => {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem
    })
    setScheduleItems(updateScheduleItems)
  }

  const handleCreateClass = async (event: FormEvent) => {
    event.preventDefault()

    try {
      await api.post('/classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems
      })
      alert('Cadastro realizado com sucesso!')
      history.push('/')
    } catch (error) {
      alert('Erro ao cadastrar')
    }

  }

  return (
    <Container className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher o formulário de inscrição"
      />

      <Main>
        <Form onSubmit={ handleCreateClass }>

          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome completo"
              value={ name }
              onChange={ e => setName(e.target.value) }
            />
            <Input
              name="avatar"
              label="Avatar"
              value={ avatar }
              onChange={ e => setAvatar(e.target.value) }
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={ whatsapp }
              onChange={ e => setWhatsapp(e.target.value) }
            />
            <Textarea
              name="bio"
              label="Biográfia"
              value={ bio }
              onChange={ e => setBio(e.target.value) }
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
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
                { value: 'Inglês', label: 'Inglês' },
              ]}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={ cost }
              onChange={ e => setCost(e.target.value) }
            />
          </fieldset>

          <fieldset className="page-teacher-hour">
            <legend>
              Horários disponíveis
              <button
                type="button"
                onClick={ addNewScheduleItem }>
                  + Novo horário
              </button>
            </legend>

            { scheduleItems.map((schedule, index) => {
              return (
                <div key={ String(index) } className="scheduleItem">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={ schedule.week_day }
                    onChange={ e => setScheduleItemValue(index, 'week_day', e.target.value) }
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
                    name="from"
                    label="Das"
                    value={ schedule.from }
                    onChange={ e => setScheduleItemValue(index, 'from', e.target.value) }
                  />
                  <Input
                    type="time"
                    name="to"
                    label="Até"
                    value={ schedule.to }
                    onChange={ e => setScheduleItemValue(index, 'to', e.target.value) }
                  />
                </div>
              )
            }) }

          </fieldset>

          <footer>
            <p>
              <img src={ warningIcon } alt="Aviso importante" title="Aviso importante"/>
              Importante!<br/>
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>

        </Form>
      </Main>
    </Container>
  )
}
