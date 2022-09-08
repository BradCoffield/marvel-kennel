import styled from "styled-components";

let PageHeadingStyled = styled.h2`
  font-family: "Bangers", "PT Sans", acuta, serif;
  text-align: center;
  font-weight: bold;
  font-size: 3rem;

  span {
    background-color: var(--color-secondary);
    padding: 1.5rem;
    border-radius: 50%;
    box-shadow: 5px 5px 5px var(--color-secondary-2);
  }
`;
 

 

const PageHeading = ({ content }) => {
  return (
    
    <PageHeadingStyled>
        
            <span>{content}</span>
        
    </PageHeadingStyled>
 
  );
};

export default PageHeading;
