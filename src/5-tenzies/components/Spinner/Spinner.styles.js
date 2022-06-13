import styled from 'styled-components'

export const Spinner = styled.div`
  border: 5px solid var(--lightGrey);
  border-radius: 50%;
  border-top: 5px solid var(--medGrey);
  width: 50px;
  height: 50px;
  margin: 20px auto;
  animation: spin 0.8s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
