import React from 'react'

import heartOutlineIcon from './../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from './../../assets/images/icons/unfavorite.png'
import whatsappIcon from './../../assets/images/icons/whatsapp.png'
import { Container, Profile, Avatar, ProfileInfo, Name, Subject, Bio,
  Footer, Price, PriceValue, ButtonsContainer, FavoriteButton, ButtonIcon, ContactButton, ButtonText
} from './style'

export const TeacherItem: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar
          source={{ uri: 'https://avatars3.githubusercontent.com/u/23706132?s=460&u=7aade1989795cf949f8f554e88e9093c242eb563&v=4' }}
        />
        <ProfileInfo>
          <Name>Gui Silva</Name>
          <Subject>História</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        { '\n' }{ '\n' }
        Dolore minus adipisci fuga veniam, dolores, possimus fugiat quas
        libero eaque necessitatibus architecto blanditiis, quos placeat
        dicta eos harum consequuntur voluptate reprehenderit!
      </Bio>

      <Footer>
        <Price>
          Preço/hora { '   ' }
          <PriceValue>R$ 20,00</PriceValue>
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
