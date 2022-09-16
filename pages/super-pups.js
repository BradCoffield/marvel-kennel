import PageHeading from "../components/PageHeading";
import styled from "styled-components";
import FlexedImages from "../components/styles/FlexedImages";
import Puppies from "../data/puppies.json"

const PuppyCard = styled.div`
background-color: var(--color-primary);
display:flex;
flex-direction: column;
padding:1rem;
max-width:420px;
text-align: center;
color: white;
margin: .5rem;
h2 {
  font-family: "Bangers", cursive;
  font-size:36px;
  letter-spacing: 3px;
  margin-bottom: 0px;
}
p {color:white;font-size:16px;}
`

export default function SuperPups() {
  return (
    <>
      <PageHeading content={"Super Pups!"} />
      <br />
      <FlexedImages>
        <img src="\assets\IMG_5051.jpg" alt="" />
        <img src="\assets\Sadie_and_her_puppies.jpg" alt="" />
      </FlexedImages>
      <br />
      <FlexedImages>
        {Puppies.map((puppy) => {
          return (
            <PuppyCard key={puppy.name}>
              <h2>{puppy.name}</h2>

              <img src={puppy.image} alt="" />
              <span>
                {puppy.available} - {puppy.sex} - {puppy.color}
              </span>
              <p>{puppy.description}</p>
             {puppy.additionalLink !== null && <p style={{"font-size":"18px"}}><a href={puppy.additionalLink}>More pictures of {puppy.name}</a></p>}
            </PuppyCard>
          );
        })}
      </FlexedImages>
    </>
  );
}
