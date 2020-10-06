import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from './../../assets/images/logo.svg'
import backIcon from './../../assets/images/icons/back.svg'

import { Header, HeaderContainer, HeaderContent } from './style'

interface PageHeaderProps {
  title: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ children, title }) => {

  return (
    <Header>
      <HeaderContainer>
        <Link to="/" title="Voltar">
          <img src={backIcon} alt="Voltar" title="Voltar"/>
        </Link>
        <img src={logoImg} alt="Proffy" title="Proffy"/>
      </HeaderContainer>

      <HeaderContent>
        <strong>{ title }</strong>
        { children }
      </HeaderContent>

    </Header>
  )
}
