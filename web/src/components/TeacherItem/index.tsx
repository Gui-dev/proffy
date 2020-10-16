import React from 'react'
import { api } from '../../services/api'

import whatsapp from './../../assets/images/icons/whatsapp.svg'
import { TeacherItemContainer } from './style'

export interface TeacherProps {
  id: number
  name: string
  avatar: string
  subject: string
  bio: string
  cost: number
  whatsapp: string
}

interface TeacherItemProps {
  teacher: TeacherProps
}

export const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  const handleCreateNewConnection = async () => {
    await api.post('/connections', {
      user_id: teacher.id
    })
  }

  return (
    <TeacherItemContainer>
      <header>
        <img
          src={ teacher.avatar }
          alt={ teacher.name }
          title={ teacher.name }
        />
        <div>
          <h1>{ teacher.name }</h1>
          <span>{ teacher.subject }</span>
        </div>
      </header>

      <p>
        { teacher.bio }
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R${ teacher.cost }</strong>
        </p>
        <a
          onClick={ handleCreateNewConnection }
          href={ `https://wa.me/${teacher.whatsapp}` }
          target="blank"
        >
          <img src={ whatsapp } alt="Whatsapp" title="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </TeacherItemContainer>
  )
}
