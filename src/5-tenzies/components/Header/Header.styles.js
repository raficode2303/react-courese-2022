import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  padding: 0 20px;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;

  color: var(--white);

  a.login-link {
    min-width: fit-content;
    min-height: 100%;
    color: var(--white);
    text-decoration: none;
    border: 5px double #369;
  }
`

export const LogoImg = styled.img`
  width: 56%;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`

export const FUNGAMESLogoImg = styled.img`
  width: 35%;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`
