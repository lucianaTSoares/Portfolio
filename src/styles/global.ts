import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  line-height: 1;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
}

ol, ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
}

h2 {
  font-size: 2rem;
}

.container {
    margin: auto 10vw;
}

.dots-background {
  background-image: radial-gradient(#ffffff87 1px, transparent 0);
	background-size: 40px 40px;
	background-position: -19px -19px;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.background};
}

/* Handle */
::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb:hover, ::-webkit-scrollbar-thumb:active {
  background: #555;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

::selection {
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};
  }
`
