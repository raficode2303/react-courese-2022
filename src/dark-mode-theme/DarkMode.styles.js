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
`
