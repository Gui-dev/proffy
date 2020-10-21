import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  padding: 40px;
  background-color: #8257E5;
`

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ButtonGoBack = styled(BorderlessButton)`

`

export const ButtonGoBackImage = styled.Image`

`

export const LogoImage = styled.Image`

`

export const Title = styled.Text`
  font-size: 24px;
  font-family: Archivo_700Bold;
  line-height: 32px;
  color: #FFF;
  max-width: 160px;
  margin: 40px 0;
`
