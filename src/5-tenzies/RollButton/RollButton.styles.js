import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: green;
  margin: 0 auto;
  width: fit-content;
  background-color: green;
  padding: 10px;
`

export const Content = styled.button`
  color: ${(props) => (props.checkIfWon ? 'gold' : '#fff')};
  font-size: 2rem;
  padding: 0.5rem;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  display: block;

  background-color: ${(props) => (props.checkIfWon ? '#fff' : 'blue')};
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    background-color: #369;
  }
`
