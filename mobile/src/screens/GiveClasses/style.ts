import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 40px;
  background-color: #8257E5;
`

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 32px;
  font-family: Archivo_400Regular;
  line-height: 37px;
  color: #FFF;
  max-width: 180px;
`

export const Description = styled.Text`
  font-size: 16px;
  font-family: Poppins_400Regular;
  line-height: 26px;
  color: #D4C2FF;
  margin-top: 24px;
  max-width: 240px;
`

export const OkButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  height: 58px;
  background-color: #04D361;
  border-radius: 8px;
`

export const OkButtonText = styled.Text`
  font-size: 16px;
  font-family: Archivo_700Bold;
  color: #FFF;
`
