 
 

// export default function Home() {
//   return `hi i'm index`
// }

import PageHeading from "../components/OldPageHeading";
import styled from "styled-components";

let AboutImage = styled.img`
  float: right;
  width: 330px;
  margin: 1rem 2rem 2rem 2rem;
  /* background-color: blue; */
  /* padding:2rem; */
  box-shadow: 1px 1px 15px #333;
`;

export default function About() {
  return (
    <>
      {/* <PageHeading
        content={"About"}
        image={"/assets/52VintageSunbursts/Black/PNG/Black-04.png"}
      /> */}
      <div>
        <br />
        <br />
        
        <p>
         Homepage
        </p>
      </div>
    </>
  );
}
