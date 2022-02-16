import styled from "styled-components";

const PageHeadingWrap1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  #new-header-2-interior {
    position: relative;
  }
  h2 {
    color: white;
    text-shadow: 0px 0px 10px var(--black);

    position: absolute;
    letter-spacing: 3px;
    top: ${(props) => props.top};
    font-size: 48px;
    padding-left: ${(props) => props.left};
  }
  img {
    /* padding: 2rem; */
    max-height: 350px;
  }
`;

const Heading = styled.h2`
  font-family: filicudi-solid, sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const PageHeading = ({ content, image, top, left }) => {
  return (
    <PageHeadingWrap1 top={top} left={left}>
      <div id="new-header-2-interior">
        <img src={`../assets/${image}`} alt="" />

        <Heading>{content}</Heading>
      </div>
    </PageHeadingWrap1>
  );
};

export default PageHeading;
