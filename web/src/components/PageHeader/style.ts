import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text-in-primary);
  width: 90%;
  margin: 0 auto;
  padding: 1.6rem 0;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  > img {
    height: 1.6rem;
  }
`

export const HeaderContent = styled.div`
  position: relative;
  width: 90%;
  margin: 3.2rem auto;

  strong {
    font-size: 3.6rem;
    font-weight: 700;
    font-family: 'Archivo';
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }
`
