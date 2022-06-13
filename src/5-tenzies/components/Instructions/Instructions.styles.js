import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  padding: 0 20px;
`

export const Content = styled.div`
  /* display: flex; */
  margin: 0 auto;

  color: var(--white);

  h2 {
    color: purple;
  }

  p {
    line-height: 1.2;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;

    @media screen and (max-width: 500px) {
      font-size: large;
    }
  }
`
