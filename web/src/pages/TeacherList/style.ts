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

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-family: Archivo;
    color: var(--color-button-text);
    width: 100%;
    height: 5.6rem;
    margin-top: 3.2rem;
    background-color: var(--color-secundary);
    border: 0;
    border-radius: 0.8rem;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: var(--color-secundary-dark);
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.6rem;
    position: absolute;
    bottom: -2.8rem;

    & div {
      margin-top: 0;
    }

    button {
      margin-top: 2.7rem;
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
