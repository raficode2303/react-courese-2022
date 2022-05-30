import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
 ::after,
 ::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: 0.5 linear;
  }

  .item2{
    max-height: calc(100vh - 6rem);
  }
  .item3{
  }
  .app {
margin: 1rem;
    padding: 3px;
    border: 3px dotted green;
    border-radius: 1rem;
    width: max(62%, 700px);
    margin: -3.5rem  auto;
    padding: 1rem;
    transform: scaleY(0.85);
    background-color: #369;
  }
.app-name{
  color: yellow;
  text-align: center;
  font-weight: 700;
}
   .item {
     overflow: auto;
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }

`
