import React from 'react'

import whatsapp from './../../assets/images/icons/whatsapp.svg'
import { TeacherItemContainer } from './style'

export const TeacherItem: React.FC = () => {
  return (
    <TeacherItemContainer>
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/23706132?s=460&u=7aade1989795cf949f8f554e88e9093c242eb563&v=4"
          alt="Gui Silva"
          title="Gui Silva"
        />
        <div>
          <h1>Gui Silva</h1>
          <span>Químico</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /><br />
        Dolorum voluptates voluptate quae, pariatur, aut facere id consequuntur esse molestias,
        dolore facilis. Porro eligendi aspernatur dicta quae esse veniam doloribus quibusdam.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$80,00</strong>
        </p>
        <button>
          <img src={ whatsapp } alt="Whatsapp" title="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </TeacherItemContainer>
  )
}
