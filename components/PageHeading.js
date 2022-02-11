import styled from "styled-components";

const PageHeading = ({ content, top, left }) => {
  const Heading = styled.h2`
    color: green;
  `;
  return <Heading>{content}</Heading>;
};

export default PageHeading;
