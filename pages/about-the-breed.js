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
      <PageHeading content={"About the Breed"} />
      <div>
        <p>
          You can read what the American Kennel Club says here:{" "}
          <a href="https://www.akc.org/dog-breeds/newfoundland/">
            https://www.akc.org/dog-breeds/newfoundland/
          </a>
        </p>
        <p>
          The Newfoundland is a large dog and a true workhorse, the Newfoundland
          is a master at long-distance swimming and has true lifesaving
          instincts in the water. He is large and strong, possessing a heavy
          coat to protect him from icy waters. Equally at home in the water and
          on land, today's Newfoundland competes in conformation, obedience,
          agility, tracking, draft and water tests, and carting. His coat can be
          black, brown, gray, or white and black.
        </p>
        <p>
          <span className="bold">A Look Back:</span> There are many conflicting
          stories as to the origin of the Newfoundland - some say he descended
          from the Great Pyrenees or a "French hound" - but nearly all agree
          that he originated in Newfoundland and his ancestors were brought
          there by fisherman from the European continent. In Newfoundland he was
          used as a working dog to pull nets for the fishermen and to haul wood
          from the forest. He also did heavy labor, such as powering the
          blacksmith's bellows.
        </p>
        <p>
          <span className="bold">Right Breed for You?</span> The Newfoundland's
          sweet disposition makes him a good fit for families. Although he
          appears somewhat docile, he is an active dog and will need daily
          exercise. Regular brushing is important to maintain his plush coat.
          Newfs are also an intelligent breed and are readily trained.
          <ul>
            <li>Working Group; AKC recognized in 1886. </li>
            <li>
              Ranging in size from 26 to 28 inches tall at the shoulder and 100
              to 150 pounds.
            </li>
            <li>Multipurpose dog; water rescue.</li>
          </ul>
        </p>
      </div>
    </>
  );
}
