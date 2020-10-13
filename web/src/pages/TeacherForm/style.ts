import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    width: 100vw;
  }
`

export const Main = styled.main`
  width: 100%;
  max-width: 74rem;
  padding: 6.4rem;
  margin: -3.2rem auto 3.2rem;
  background-color: var(--color-box-base);
  border-radius: 0.8rem;
  overflow: hidden;
`

export const Form = styled.form`
  max-width: 100%;

  fieldset {
    max-width: 100%;
    padding: 0 2.4rem;
    border: 0;

    & + fieldset {
      margin-top: 6.4rem;
    }

    & + textarea {
      margin-top: 2.4rem;
    }

    @media (min-width: 700px) {
      padding: 0 6.4rem;
    }

    label {
      color: var(--color-text-complement);
    }
  }

  legend {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2.4rem;
    font-weight: 700;
    font-family: Archivo;
    color: var(--color-text-title);
    width: 100%;
    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }

  footer {
    width: 100%;
    padding: 4rem 2.4rem;
    margin-top: 6.4rem;
    background-color: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: var(--color-text-complement);

      img {
        margin-right: 1rem;
      }
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4rem 6.4rem;

      p {
        justify-content: space-between;
      }

      button {
        width: 20rem;
        margin-top: 0;
      }
    }
  }
`
