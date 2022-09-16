import PageHeading from "../../components/PageHeading";
import styled from "styled-components";
import FlexedImages from "../../components/styles/FlexedImages";
import Puppies from "../../data/puppies.json";
import Link from "next/link";
import ContactCalloutButton from "../../components/styles/ContactCalloutButton";

let Card = styled.div`
  padding: 0.11rem;
  /* background-color: var(--color-secondary-2); */
  background-color: var(--color-primary);
  border-radius: 5px;
  margin: 1rem;
  max-width: 400px;

  h3 {
    text-align: center;
    color: white;
    text-transform: uppercase;

    margin: 0px;
    font-family: "Bangers", cursive;
    font-family: "Bangers", cursive;
    font-size: 36px;
    letter-spacing: 3px;
    margin-bottom: 0px;
  }
  .details li {
    list-style-type: none;
    text-align: center;
  }
  .details ul {
    padding: 0px;
    margin: 0px;
    color: white;
  }

  img {
    max-width: 85%;
    display: block;
    margin: 1rem auto;
  }
`;

const thisPupName = "Marvin";

let thisPuppyData = Puppies.filter((p) => {
  return p.name === thisPupName;
});
console.log(thisPuppyData);

export default function Marvin() {
  return (
    <>
      <PageHeading content={thisPuppyData[0].name} />

      <p>{thisPuppyData[0].description}</p>
      <p>
        {thisPuppyData[0].available} - {thisPuppyData[0].sex} -{" "}
        {thisPuppyData[0].color}
      </p>

      <FlexedImages>
        <Card>
          <img src="\assets\marvin\Marvin.jpg" alt="" />
        </Card>
        <Card>
          <img src="\assets\marvin\Marvin2.jpg" alt="" />
        </Card>
        <Card>
          <img src="\assets\marvin\Marvin3.jpg" alt="" />
        </Card>
        <Card>
          <img src="\assets\marvin\Marvin4.jpg" alt="" />
        </Card>
        <Card>
          <img src="\assets\marvin\Marvin5.jpg" alt="" />
        </Card>
        <Card>
          <img src="\assets\marvin\Marvin6.jpg" alt="" />
        </Card>
        <Card>
          <img src="\assets\marvin\Marvin7.jpg" alt="" />
        </Card>
  
      </FlexedImages>

      <ContactCalloutButton>
        <Link href="/contact">Interested in adopting? Contact us!</Link>
      </ContactCalloutButton>
    </>
  );
}
