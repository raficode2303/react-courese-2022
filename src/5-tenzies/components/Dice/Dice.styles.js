import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  color: blue;
  background-color: ${(props) => props.bckColor};
  box-shadow: -5px 4px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  :hover {
    opacity: 0.8s;
  }

  @keyframes animateThumb {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
