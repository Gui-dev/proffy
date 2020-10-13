import React from 'react'

import { PageHeader } from './../../components/PageHeader'
import { Input } from './../../components/Input'
import { Textarea } from '../../components/Textarea'
import warningIcon from './../../assets/images/icons/warning.svg'
import { Container, Main, Form } from './style'

export const TeacherForm: React.FC = () => {
  return (
    <Container className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher o formulário de inscrição"
      />

      <Main>
        <Form>

          <fieldset>
            <legend>Seus dados</legend>
            <Input name="name" label="Nome completo"/>
            <Input name="avatar" label="Avatar"/>
            <Input name="whatsapp" label="Whatsapp"/>
            <Textarea name="bio" label="Biográfia"/>
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Input name="subject" label="Matéria"/>
            <Input name="cost" label="Custo da sua hora por aula"/>
          </fieldset>

          <footer>
            <p>
              <img src={ warningIcon } alt="Aviso importante" title="Aviso importante"/>
              Importante!<br/>
              Preencha todos os dados
            </p>
            <button>Salvar cadastro</button>
          </footer>

        </Form>
      </Main>
    </Container>
  )
}
