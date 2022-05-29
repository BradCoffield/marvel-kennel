 
 

// export default function Home() {
//   return `hi i'm index`
// }

import PageHeading from "../components/PageHeading";
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
        <AboutImage alt="Ashley Kunsa" src="/assets/Ashley K headshot.jpg" />
        <p>
          Ashley Kunsa is assistant professor of creative writing at Rocky
          Mountain College in Billings, MT. She holds a PhD in English
          literature from Duquesne University and an MFA in fiction writing from
          Penn State. Her poetry has appeared or is forthcoming in{" "}
          <em>Bennington Review</em>, <em>Massachusetts Review</em>,{" "}
          <em>Radar Poetry</em>, <em>Cream City Review</em>, and{" "}
          <em>Southern Humanities Review</em>, and her fiction and nonfiction
          have been published in the <em>Los Angeles Review</em>,{" "}
          <em>The Writer</em> magazine, <em>The Forge</em>,{" "}
          <em>Sycamore Review</em>, and many other venues. Originally from
          Pittsburgh, she lives in Billings with her husband and two children.
        </p>
      </div>
    </>
  );
}
