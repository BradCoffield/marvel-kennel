import styled from "styled-components";

const MainNavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-primary);
  padding: 0 2rem;
  position: sticky;

  #nav-left,
  #nav-right {
    height: 205px;
    display: flex;
    align-items: center;
  }

  #nav-left h1 {
    /* font-family: flegrei, sans-serif; */
    font-family: "Bangers", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 72px;
    background: linear-gradient(
      to right,
      var(--color-accent-2) 0%,
      var(--color-accent-1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #nav-right ul {
    padding-left: 0px;
  }
  #nav-right .nav-li-insides li {
    list-style: none;
    display: inline;
    margin: 0rem 1rem;
    
    color: white;
    font-size: 28px;
  }
  .nav-li-insides li {
    list-style: none;
    display: inline;
    margin: 0rem 1rem;
   
    color: white;
    font-size: 24px;
    list-style-type: none;
    color: white;
  }
  .nav-li-insides li:hover,
  .nav-li-insides li:focus {
    border-bottom: 1px solid white;
  }
  .nav-li-insides li a {
    text-decoration: transparent solid;
    /* border: 1px white solid; */
    font-size: 16px;
  }
`;

export default MainNavStyles;
