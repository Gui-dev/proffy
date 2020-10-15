import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import logoImg from './../../assets/images/logo.svg'
import landingImg from './../../assets/images/landing.svg'
import studyImg from './../../assets/images/icons/study.svg'
import giveClassesIcon from './../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from './../../assets/images/icons/purple-heart.svg'
import { api } from '../../services/api'
import { Container, PageContainer, LogoContainer, ButtonContainer } from './style'

export const Landing: React.FC = () => {

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('/connections')
       .then(response => {
         const { total } = response.data
         setTotalConnections(total)
       })
  }, [])

  return (
    <Container>
      <PageContainer className="container">
        <LogoContainer>
          <img src={logoImg} alt="Proffy" title="Proffy"/>
          <h1>Sua plataforma de estudos online</h1>
        </LogoContainer>

        <img src={landingImg} alt="Plataforma de estudos" title="Plataforma de estudos"/>

        <ButtonContainer>
          <Link to="/study" title="Estudar" className="study">
            <img src={studyImg} alt="Estudar" title="Estudar"/>
            Estudar
          </Link>
          <Link to="/give-classes" title="Estudar" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" title="Dar aulas"/>
            Dar aulas
          </Link>
        </ButtonContainer>

        <span>
          Total de { totalConnections } conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" title="Coração roxo"/>
        </span>
      </PageContainer>
    </Container>
  )
}

