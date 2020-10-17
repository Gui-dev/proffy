import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 40px;
  background-color: #8257E5;
`

export const Image = styled.Image`
  width: 100%;
  resize-mode: contain;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: Poppins_400Regular;
  line-height: 30px;
  color: #FFF;
  margin-top: 40px;

`

export const SubTitle = styled.Text`
  font-family: Poppins_600SemiBold;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`

export const ButtonPrimary = styled.TouchableOpacity`
  justify-content: space-between;
  width: 48%;
  height: 150px;
  padding: 24px;
  background-color: #9871F5;
  border-radius: 8px;
`

export const ButtonSecondary = styled.TouchableOpacity`
  justify-content: space-between;
  width: 48%;
  height: 150px;
  padding: 24px;
  background-color: #04D361;
  border-radius: 8px;
`

export const ImageIcon = styled.Image`

`

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: Archivo_700Bold;
  color: #FFF;
`

export const TotalConnections = styled.Text`
  font-size: 12px;
  font-family: Poppins_400Regular;
  color: #D4C2FF;
  line-height: 20px;
  max-width: 140px;
  margin-top: 20px;
`