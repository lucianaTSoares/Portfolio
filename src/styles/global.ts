import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

body {
  scroll-behavior: smooth;
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

.container {

  @media (min-width: 0px) { 
    max-width: 325px;
    margin: 0 auto;
  }

  @media (min-width: 425px) { 
    max-width: 425px;
    margin: 0 auto;
  }

  @media (min-width: 576px) { 
    max-width: 576px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {     
    max-width: 768px;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    max-width: 992px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) { 
    max-width: 1200px;
    margin: 0 auto;
   }

  @media (min-width: 1400px) { 
    max-width: 1400px;
    margin: 0 auto;
   }
}

.dots-background {
  background-image: radial-gradient(#ffffff87 1px, transparent 0);
	background-size: 40px 40px;
	background-position: -19px -19px;
}
`
