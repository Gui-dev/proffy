import React from 'react'
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImage from './../../assets/images/give-classes-background.png'
import { Container, ImageBackground, Title, Description, OkButton, OkButtonText } from './style'

export const GiveClasses: React.FC = () => {

  const { goBack } = useNavigation()

  const handleGoHome = () => {
    goBack()
  }

  return (
    <Container>
      <ImageBackground
        source={giveClassesBgImage}
        resizeMode="contain"
      >
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web
        </Description>
      </ImageBackground>

      <OkButton onPress={ handleGoHome }>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  )
}
