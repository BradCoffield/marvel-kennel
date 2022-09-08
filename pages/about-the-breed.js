import PageHeading from "../components/PageHeading";
import styled from "styled-components";

let AboutImage = styled.img`
float:right;
width: 330px;margin: 1rem 2rem 2rem 2rem;
/* background-color: blue; */
/* padding:2rem; */
box-shadow: 1px 1px 15px #333;
`

export default function AboutTheBreed() {
  return (
    <>
      <PageHeading
        content={"About the Breed"}
        
      />
      <div>
        Content
      </div>
    </>
  );
}
