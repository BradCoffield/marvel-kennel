 
 

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
      <div >
        <br />
        <br />
        <AboutImage
          alt="Ashley Kunsa"
          src="https://wta9-v1.netlify.app/images/Ashley%20K%20headshot.JPG"
        />
        <p>
          Ashley Kunsa is a writer, teacher, and Pittsburgh native. Her poetry,
          short fiction, and nonfiction can be found or is forthcoming in a
          variety of print and online publications including{" "}
          <em>Bennington Review</em>,<em>The Forge</em>,{" "}
          <em>Cream City Review</em>, and <em>The Writer Magazine</em>. Her work
          has received prizes from the A Room of Her Own Foundation and{" "}
          <em>Eastern Iowa Review</em>. She holds an MFA from Penn State
          University and a PhD from Duquesne University and is currently
          assistant professor of creative writing at Rocky Mountain College in
          Billings, MT, where she lives with her husband and two children.
        </p>
      </div>
    </>
  );
}
