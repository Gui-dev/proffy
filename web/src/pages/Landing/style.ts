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

  @media (min-width: 1100px) {
    display: grid;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total'
      ;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 35rem 1fr;

    max-width: 110rem;

    > img {
      grid-area: hero;
    }

    span {
      grid-area: total;
      justify-self: flex-end;
      font-size: 1rem;

      img {
        display: none;
      }
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

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    h1 {
      font-size: 3.6rem;
      text-align: initial;
    }

    img {
      height: 100%;
      align-self: center;
      justify-self: flex-end;
    }
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

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
      margin-left: 2,4rem;

      img {
        margin-right: 2rem;
      }
    }

    .give-classes {
      margin-right: 1rem;
    }
  }
`
