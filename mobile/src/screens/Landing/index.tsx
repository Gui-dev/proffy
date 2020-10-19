import React from 'react'
import { useNavigation } from '@react-navigation/native'

import landingImage from './../../assets/images/landing.png'
import studyIcon from './../../assets/images/icons/study.png'
import giveClassesIcon from './../../assets/images/icons/give-classes.png'
import heartIcon from './../../assets/images/icons/heart.png'
import { Container, Image, Title, SubTitle, ButtonsContainer,
  ButtonPrimary, ImageIcon, ButtonText, ButtonSecondary, TotalConnections } from './style'

export const Landing: React.FC = () => {

  const { navigate } = useNavigation()

  const handleNavigateToGiveClasses = () => {
    navigate('GiveClasses')
  }

  return (
    <Container>
      <Image source={ landingImage }/>
      <Title>
        Seja bem vindo, { '\n' }
        <SubTitle>O que deseja fazer?</SubTitle>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary>
          <ImageIcon source={ studyIcon }/>
          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>

        <ButtonSecondary onPress={ handleNavigateToGiveClasses }>
          <ImageIcon source={ giveClassesIcon }/>
          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecondary>
      </ButtonsContainer>

      <TotalConnections>
        Total de 200 conexões já realizadas {' '}
        <ImageIcon source={ heartIcon }/>
      </TotalConnections>
    </Container>
  )
}
