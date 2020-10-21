import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

interface FavoriteProps {
  favorited: boolean
}

export const Container = styled.ScrollView`
  margin-bottom: 16px;
  background-color: #FFF;
  border-width: 1px;
  border-color: #E6E6F0;
  border-radius: 8px;
  overflow: hidden;
`

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  background-color: #EEE;
  border-radius: 32px;
`

export const ProfileInfo = styled.View`
  margin-left: 16px;
`

export const Name = styled.Text`
  font-size: 20px;
  font-family: Archivo_700Bold;
  color: #32264D;
`

export const Subject = styled.Text`
  font-size: 12px;
  font-family: Poppins_400Regular;
  color: #6A6180;
  margin-top: 4px;
`

export const Bio = styled.Text`
  font-size: 14px;
  font-family: Poppins_400Regular;
  line-height: 24px;
  color: #6A6180;
  margin: 0 24px;
`

export const Footer = styled.View`
  align-items: center;
  margin-top: 24px;
  padding: 24px;
  background-color: #FAFAFC;
`

export const Price = styled.Text`
  font-size: 14px;
  font-family: Poppins_400Regular;
  color: #6A6180;
`

export const PriceValue = styled.Text`
  font-size: 16px;
  font-family: Archivo_700Bold;
  color: #8257E5;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`

export const FavoriteButton = styled(RectButton)<FavoriteProps>`
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-right: 8px;
  background-color: ${ ({ favorited }) => favorited ? '#E33D3D' : '#8257E5' };
  border-radius: 8px;
`

export const ButtonIcon = styled.Image`

`

export const ContactButton = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin-right: 8px;
  background-color: #04D361;
  border-radius: 8px;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: Archivo_700Bold;
  color: #FFF;
  margin-left: 16px;
`


