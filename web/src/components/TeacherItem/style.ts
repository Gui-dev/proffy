import styled from 'styled-components'

export const TeacherItemContainer = styled.article`
  margin-top: 2.4rem;
  background-color: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  overflow: hidden;

  header {
    display: flex;
    align-items: center;
    padding: 3.2rem 2rem;

    > img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    > div {
      margin-left: 2.4rem;

      h1 {
        display: block;
        font-size: 2.4rem;
        font-weight: 700;
        font-family: Archivo;
        color: var(--color-text-title);
      }

      span {
        display: block;
        font-size: 1.6rem;
        color: var(--color-text-title);
        margin-top: 0.4rem;
      }
    }

    @media (min-width: 700px) {
      padding: 3.2rem;
    }
  }

  > p {
    font-size: 1.6rem;
    line-height: 2.8rem;
    padding: 0 2rem;

    @media (min-width: 700px) {
      padding: 0 3.2rem;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.2rem;
    padding: 3.2rem 2rem;
    background-color: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);

    > p {
      font-size: 1.6rem;

      > strong {
        display: block;
        font-size: 1.6rem;
        color: var(--color-primary);

        @media (min-width: 700px) {
          display: initial;
          margin-left: 1.6rem;
        }
      }
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      font-size: 1.4rem;
      font-weight: 700;
      font-family: Archivo;
      color: var(--color-button-text);
      text-decoration: none;
      width: 20rem;
      height: 5.6rem;
      background-color: var(--color-secundary);
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background-color: var(--color-secundary-dark);
      }

      @media (min-width: 700px) {
        justify-content: center;
        font-size: 1.6rem;
        width: 24.5rem;

        > img {
          margin-right: 1.6rem;
        }
      }
    }

    @media (min-width: 700px) {
      padding: 3.2rem;
    }
  }
`
