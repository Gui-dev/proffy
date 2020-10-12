import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  @media (min-width: 700px) {
    height: 30.4rem;
  }
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

  @media (min-width: 700px) {
    max-width: 110rem;
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

  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-title-in-primary);
    max-width: 30rem;
    margin-top: 2.4rem;
    margin-bottom: 6.4rem;
  }

  @media (min-width: 700px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 74rem;
    margin: 0 auto;
    margin-bottom: 0;
    padding-bottom: 4.8rem;

    strong {
      max-width: 35rem;
    }
  }
`
