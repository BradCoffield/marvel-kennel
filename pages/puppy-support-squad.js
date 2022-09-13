import PageHeading from "../components/PageHeading";
import styled from "styled-components";
let Pic = styled.img`
  display: block;
  margin: 1rem auto;
  max-width:100%;
`;


export default function PuppySupportSquad() {
  return (
    <>
      <div className="headingTooLong">
        <PageHeading content={"Puppy Support Squad"} />
      </div>
      <div>
        <p>
          This is a family endeavor. Meet the crew: Rebecca (mom), Zach (Marvel
          Kennel owner), Preston (Assistant Manager), Hana (Birth Supervisor and
          Growth Monitor), and Julian (Logistics, Strategic Play Planning,
          Entertainment, and Sanitation Leader).
        </p>
        <p>
          <Pic src="/assets/TheSquad5.jpg" alt=""></Pic>
        </p>
        <p>
          From birth, we’ve shared the experience of breeding our Newfoundland,
          from cutting umbilical cords to group feedings and gatherings. We’ve
          rolled up our sleeves and have honored a hands-on approach with love,
          tails, tales, and more.
        </p>
        <p>
          It took our entire family hundreds of hours and energy to ensure these
          puppies were supervised round-the-clock so that we could provide the
          healthiest, most-loved-on pups possible for your family.
        </p>
        <p>We hope you love our puppies as much as we do.</p>
      </div>
    </>
  );
}
