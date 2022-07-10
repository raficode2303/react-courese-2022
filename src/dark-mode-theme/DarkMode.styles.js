import styled from 'styled-components'
export const DarkThemeToggle = styled.a`
  display: block;

  text-decoration: none;
  width: 120px;
  height: 40px;
  border: 1px dotted yellow;
  border-radius: 3rem;
  background-color: ${(props) => props.theme.bgc};
`

export const BallTheme = styled.div`
  margin-left: ${(props) => (props.isDarkMode ? '25%' : '0%')}; // 0 30 57
  width: 75%;
  height: 100%;
  border: 1px dotted ${(props) => props.theme.color};
  border-radius: 3rem;
  background-color: ${(props) => props.theme.bgc};
`

export const Main = styled.main`
  padding: 1rem;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgc};
  color: ${(props) => props.theme.color};
  font-size: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .sticky {
    position: sticky;
    top: 0;
    background-color: green;
    width: 100%;
    a {
      margin: 0 5px;
    }
  }
  #info,
  #contact,
  #about {
    margin: 40px 0;
    background-color: salmon;
  }

  .btn {
    all: unset;
  }

  .error {
    background-color: red;
    min-height: 10px;
    background-color: blue;
    :empty {
      visibility: hidden;
    }
  }
  form:active > .error:empty::before {
    content: 'please eneter  email';
    background-color: red;
    visibility: visible !important;
    display: block;
  }

  :target {
    border: 10px solid red !important;
    background-color: #369;
  }
`

export const Gradient = styled.div`
  width: 25vw;
  height: 25vh;
  border-radius: 3%;
  border: outset 4px green;
  background-image: repeating-linear-gradient(
    ${(props) =>
      props.theme.bgc === 'white'
        ? '45deg,red,red,10px,yellow 10px,yellow 20px'
        : '90deg,yellow,yellow,10px,red 10px,red 20px'}
  );
`
