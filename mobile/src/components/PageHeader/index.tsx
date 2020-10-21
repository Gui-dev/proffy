import React from 'react'
import { useNavigation } from '@react-navigation/native'

import backIcon from './../../assets/images/icons/back.png'
import logoImage from './../../assets/images/logo.png'
import { PageHeaderProps } from './PageHeaderProps.interface'
import { Container, TopBar, ButtonGoBack, ButtonGoBackImage, LogoImage, Title } from './style'

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {

  const { navigate } = useNavigation()

  const handleGoHome = () => {
    navigate('Landing')
  }

  return (
    <Container>
      <TopBar>
        <ButtonGoBack onPress={ handleGoHome }>
          <ButtonGoBackImage source={ backIcon } resizeMode="contain"/>
        </ButtonGoBack>

        <LogoImage  source={ logoImage } resizeMode="contain"/>
      </TopBar>

      <Title>{ title }</Title>
    </Container>
  )
}
