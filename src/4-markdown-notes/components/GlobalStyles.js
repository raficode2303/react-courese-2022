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
    background-color: #369;
    transition: 0.5 linear;
  }
   .item1{
    grid-area: sidebar;
  }
  .item2{
    grid-area: write;
  }
  .item3{
    grid-area: preview;
  }
  .app {
    display: grid;
    grid-template-areas: 'sidebar write write'
    'sidebar preview preview';
    gap: 10px;
    background-color: #2196f3;
    padding: 10px;
  }
   .item {
    background-color: #ffffffcc;
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
  .text-decoration{
    display: grid;
    grid-template-columns: repeat(4, 13%);
    justify-content: center;
    padding: 5px;
list-style: none;

  }
 .text-decoration li {
   font-size: 1.3rem;
   font-weight: bold;

 }
  .text-decoration li:hover {
 background-color: #ccc;
   color: rebeccapurple;

 }
 button.image-text{
   font-weight: normal;
 }
 .shifted {
   font-style: oblique;
 }
`
