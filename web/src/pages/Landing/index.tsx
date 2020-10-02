import React from 'react'

import logoImg from './../../assets/images/logo.svg'
import landingImg from './../../assets/images/landing.svg'
import studyImg from './../../assets/images/icons/study.svg'
import giveClassesIcon from './../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from './../../assets/images/icons/purple-heart.svg'
import { Container, PageContainer, LogoContainer, ButtonContainer } from './style'

export const Landing: React.FC = () => {
  return (
    <Container>
      <PageContainer className="container">
        <LogoContainer>
          <img src={logoImg} alt="Proffy" title="Proffy"/>
          <h1>Sua plataforma de estudos online</h1>
        </LogoContainer>

        <img src={landingImg} alt="Plataforma de estudos" title="Plataforma de estudos"/>

        <ButtonContainer>
          <a href="/" title="Estudar" className="study">
            <img src={studyImg} alt="Estudar" title="Estudar"/>
            Estudar
          </a>
          <a href="/" title="Estudar" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" title="Estudar"/>
            Estudar
          </a>
        </ButtonContainer>

        <span>
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" title="Coração roxo"/>
        </span>
      </PageContainer>
    </Container>
  )
}

