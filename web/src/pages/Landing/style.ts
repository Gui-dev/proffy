import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-in-primary);
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
`

export const PageContainer = styled.div`
  img {
    max-width: 100%;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;

    img {
      margin-left: 0.8rem;
    }
  }
`

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  img {
    height: 10rem;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 4rem;
    margin-top: 0.8rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-family: 'Archivo';
    font-weight: 700;
    text-decoration: none;
    color: var(--color-button-text);
    width: 30rem;
    height: 10rem;
    border-radius: 0.8rem;
    transition: background-color 0.2s;

    img {
      width: 4rem;
    }
  }

  a:first-child {
    margin-right: 1.6rem;
  }

  .study {
    background-color: var(--color-primary-lighter);

    &:hover {
      background-color: var(--color-primary-light);
    }
  }

  .give-classes {
    background-color: var(--color-secundary);

    &:hover {
      background-color: var(--color-secundary-dark);
    }
  }
`
