import styled from "styled-components";

const PageHeadingWrap1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */

  #new-header-2-interior {
    /* position: relative; */
    display: flex;
    align-items: center;
    width: 350px;
    height: 350px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: contain;
    /* background-color: coral; */
  }
  h2 {
    color: white;
    text-shadow: 0px 0px 10px var(--black);
    letter-spacing: 3px;
    /* top: ${(props) => props.top}; */
    font-size: 48px;
    /* padding-left: ${(props) => props.left}; */
    width: 350%;
    text-align: center;
  }
 
`;

const Heading = styled.h2`
  font-family: filicudi-solid, sans-serif;
  font-weight: 400;
  font-style: normal;
  /* background-color: red; */
`;

const PageHeading = ({ content, image, top, left }) => {
  return (
    <PageHeadingWrap1 top={top} left={left} image={image}>
      <div id="new-header-2-interior">
        {/* <img src={`../assets/${image}`} alt="" /> */}

        <Heading>{content}</Heading>
      </div>
    </PageHeadingWrap1>
  );
};

export default PageHeading;
