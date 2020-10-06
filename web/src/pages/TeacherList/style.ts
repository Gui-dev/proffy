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

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.6rem;
    position: absolute;
    bottom: -2.8rem;
  }
`

export const InputBlock = styled.div`
  position: relative;

  & + div {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {
    & + div {
      margin-top: 0;
    }
  }

  &:focus-within::after {
    content: '';
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
    width: calc(100% - 3.2rem);
    height: 2px;
    background-color: var(--color-primary-light);
  }

  label {
    font-size: 1.4rem;
    color: var(--color-text-in-primary);
  }

  input {
    font-size: 1.6rem;
    font-family: Archivo;
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    padding: 0 1.6rem;
    background-color: var(--color-input-background);
    border-radius: 0.8rem;
    border: 1px solid var(--color-line-in-white);
    outline: 0;
  }
`
