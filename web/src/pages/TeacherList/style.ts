import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw !important;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`

export const Form = styled.form`
  margin-top: 3.2rem;

  & div:first-child {
    margin-top: 10rem;
  }

  & div {
    margin-top: 0 !important;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.6rem;
    position: absolute;
    bottom: -2.8rem;

    & div {
      margin-top: 0;
    }
  }
`

export const Main = styled.main`
  width: 90%;
  margin: 3.2rem auto;

  @media (min-width: 700px) {
    max-width: 74rem;
    padding: 3.2rem 0;
  }
`
