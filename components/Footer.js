import styled from 'styled-components'

const FooterStyled = styled.footer`
text-align: center;
font-size: 1rem;
background-color: var(--teal-1, transparent);
padding: 2rem 0px;
margin-top: 4rem;
a{text-decoration:0px solid black;}
a:hover {
    border-bottom:1px solid black;
}
`

const Footer = () => {
    return <FooterStyled> &copy; Ashley Kunsa | Website by <a href="https://www.studio303.dev">Studio303</a></FooterStyled>;
}
 
export default Footer;