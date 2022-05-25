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
    max-width: 62%;
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
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
  .text-decoration{
    width: 50%;
    display: grid;
    grid-template-columns: repeat(4, 13%);
    justify-content: end;
    padding: 5px;
   list-style: none;

  }
  textarea {
    resize: vertical;
    max-height: 100%;
    min-width: 98%;
    max-width: 100%;
    font-size: 2rem;
  }
 .fontAwesomeIcon {
        width: 2rem;
        min-width: fit-content;
        border-radius: 4px;
   font-size: 1.3rem;
   font-weight: bold;

 }
  .fontAwesomeIcon:hover {
 background-color: #ccc;
   color: rebeccapurple;

 }
.fontAwesomeIcon:active {
  background-color: #cc2;
    color: green;

}
.border-inset {
  border-style: inset;
}
`
