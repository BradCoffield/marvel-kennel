import styled from 'styled-components'

const FooterStyled = styled.footer`
text-align: center;
font-size: 1rem;
background-color: var(--color-primary, transparent);
padding: 2rem 0px;
margin-top: 4rem;
color: white;
a{text-decoration:0px solid white;}
a:hover {
    border-bottom:1px solid white;
}
`

const Footer = () => {
    return <FooterStyled> &copy; Marvel kennel | Website by <a href="https://www.studio303.dev">Studio303</a></FooterStyled>;
}
 
export default Footer;