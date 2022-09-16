import styled from "styled-components";

let ContactCalloutButton = styled.div`
  text-align: center;
  margin: 3rem auto;
  display: block;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: var(--box-shadow);
  background-color: var(--color-accent-2);

  a {
    text-decoration: none;
    color: var(--color-secondary-2);
  }

  :hover {
    box-shadow: none;
    cursor: pointer;
  }
`;

export default ContactCalloutButton