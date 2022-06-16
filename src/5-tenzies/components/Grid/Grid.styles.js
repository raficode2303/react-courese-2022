import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: var(--maxWidthRollsWraper);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--medGrey);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--fontBig);
  }
`

export const Content = styled.div`
  border: 5px dotted green;
  border-radius: 2rem;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  gap: 0.77rem;
`
