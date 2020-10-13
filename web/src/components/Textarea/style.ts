import styled from 'styled-components'

export const TextareaBlock = styled.div`
  position: relative;

  & + div {
    margin: 1.4rem 0;
  }

  @media (min-width: 700px) {
    & + div {
      margin: 1.4rem 0;
    }
  }

  &:focus-within::after {
    content: '';
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0.7rem;
    width: calc(100% - 3.2rem);
    height: 2px;
    min-height: 0.8rem;
    background-color: var(--color-primary-light);
  }

  label {
    font-size: 1.4rem;
    color: var(--color-text-in-primary);
  }

  textarea {
    font-size: 1.6rem;
    font-family: Archivo;
    width: 100%;
    height: 16rem;
    margin-top: 0.8rem;
    padding: 1.2rem 1.6rem;
    background-color: var(--color-input-background);
    border-radius: 0.8rem;
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    resize: vertical;
  }
`
