import React from 'react'

import heartOutlineIcon from './../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from './../../assets/images/icons/unfavorite.png'
import whatsappIcon from './../../assets/images/icons/whatsapp.png'
import { TeacherItemProps } from './TeacherItem.interface'
import { Container, Profile, Avatar, ProfileInfo, Name, Subject, Bio,
  Footer, Price, PriceValue, ButtonsContainer, FavoriteButton, ButtonIcon, ContactButton, ButtonText
} from './style'

export const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
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

          <FavoriteButton favorited={ true }>
            {/* <ButtonIcon source={ heartOutlineIcon }/> */}
            <ButtonIcon source={ unfavoriteIcon }/>
          </FavoriteButton>

          <ContactButton>
            <ButtonIcon source={ whatsappIcon }/>
            <ButtonText>Entrar em contato</ButtonText>
          </ContactButton>

        </ButtonsContainer>
      </Footer>
    </Container>
  )
}
