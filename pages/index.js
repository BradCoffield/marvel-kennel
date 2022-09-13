 
 

// export default function Home() {
//   return `hi i'm index`
// }

import PageHeading from "../components/OldPageHeading";
import styled from "styled-components";
import TitleTextSmall from "../components/styles/TitleTextSmall";
import FlexedImages from "../components/styles/FlexedImages";

let HomepageImage = styled.img`
  
  width: 530px;
  margin: 2rem auto;
  display: block;
  /* background-color: blue; */
  /* padding:2rem; */
  box-shadow: 1px 1px 15px #333;
  max-width:100%;
`;
let HomepageContent = styled.div`
text-align: center;
`


export default function About() {
  return (
    <>
     
      <HomepageContent>
        <br />
        <br />

        <p style={{ "font-size": "1.5rem" }}>
          Welcome to <TitleTextSmall>Marvel Kennel</TitleTextSmall>, home of the
          super dog (in our opinion), Newfoundlands.
          <HomepageImage src="/assets/TheMarvels.jpg" alt="" />
        </p>
        <p>
          We are located in the Treasure Valley, the small hometown of Star,
          Idaho.
        </p>
        <p>
          Our dogs have plenty of space to roam and play and are loved on by our
          family from birth. Our puppies are vet checked, current
          on shots, wormed, and chipped prior to leaving for their forever home.{" "}
          <br />
          <span className="bold">
            We have a one year health guarantee on all our puppies.
          </span>
        </p>
        <p>
          <br />
          <FlexedImages>
            <img src="\assets\akc-web-banner_orig.jpg" alt="" />
          
            <img src="\assets\PennHiplogo.jpg" alt="" /><img src="\assets\ofaorg_1_orig.gif" alt="" />
          </FlexedImages>
        </p>
      </HomepageContent>
    </>
  );
}
