import React, { useState } from 'react'
import { Linking } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import heartOutlineIcon from './../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from './../../assets/images/icons/unfavorite.png'
import whatsappIcon from './../../assets/images/icons/whatsapp.png'
import { TeacherItemProps, TeacherProps } from './TeacherItem.interface'
import { api } from '../../services/api'
import { Container, Profile, Avatar, ProfileInfo, Name, Subject, Bio,
  Footer, Price, PriceValue, ButtonsContainer, FavoriteButton, ButtonIcon, ContactButton, ButtonText
} from './style'

export const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {

  const [isFavorited, setIsFavorited] = useState(favorited)

  const handleLinkToWhatsapp = () => {
    api.post('/connections', {
      user_id: teacher.id
    })
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  const handleToggleFavorite = async () => {

    const favorites = await AsyncStorage.getItem('favorites')
    let favoritesArray = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: TeacherProps) => teacherItem.id === teacher.id
      )
      favoritesArray.splice(favoriteIndex, 1)
      setIsFavorited(false)
    } else {
      favoritesArray.push(teacher)
      setIsFavorited(true)
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }



  return (
    <Container>
      <Profile>
        <Avatar
          source={{ uri: teacher.avatar }}
        />
        <ProfileInfo>
          <Name>{ teacher.name }</Name>
          <Subject>{ teacher.subject }</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        { teacher.bio }
      </Bio>

      <Footer>
        <Price>
          Preço/hora { '   ' }
          <PriceValue>R$ { teacher.cost }</PriceValue>
        </Price>

        <ButtonsContainer>

          <FavoriteButton
            onPress={ handleToggleFavorite }
            favorited={ isFavorited }
          >
            { isFavorited
                ? <ButtonIcon source={ unfavoriteIcon }/>
                : <ButtonIcon source={ heartOutlineIcon }/>
            }

          </FavoriteButton>

          <ContactButton onPress={ handleLinkToWhatsapp }>
            <ButtonIcon source={ whatsappIcon }/>
            <ButtonText>Entrar em contato</ButtonText>
          </ContactButton>

        </ButtonsContainer>
      </Footer>
    </Container>
  )
}
