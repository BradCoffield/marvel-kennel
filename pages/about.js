import PageHeading from "../components/PageHeading";
import styled from "styled-components";

let AboutImage = styled.img`
float:right;
width: 330px;margin: 1rem 2rem 2rem 2rem;
/* background-color: blue; */
/* padding:2rem; */
box-shadow: 1px 1px 15px #333;
`

export default function About() {
  return (
    <>
      <PageHeading
        content={"About"}
        image={"/assets/52VintageSunbursts/Black/PNG/Black-04.png"}
      />
      <div>
        <AboutImage
          alt="Ashley Kunsa"
          src="https://wta9-v1.netlify.app/images/Ashley%20K%20headshot.JPG"
        
        />
        <p>
          I hold a PhD in English literature from Duquesne University, where I
          taught courses in American literature, creative writing, and
          composition and served as the Assistant Director of the Writing
          Center. In 2009 I earned an MFA in fiction from Penn State University
          and in 2004 a BA in English writing and history from the University of
          Pittsburgh. I'm currently Assistant Professor of Creative Writing at
          Rocky Mountain College.
        </p>

        <p>
          My training as a creative writer informs my critical attention to
          literary form and narrative theory as well as my pedagogical approach
          to texts both literary and nonliterary. My recent critical work
          considers post-9/11 American war fiction by Ben Fountain, Phil Klay,
          and David Abrams in the context of government, military, and media
          discourses about the Iraq War and the ever-evolving legacy of the
          Vietnam War. I also study U.S. poetry, drama, and fiction from
          throughout the twentieth century as well as post-WWII British fiction
          and poetry.
        </p>

        <p>
          A native of southwestern PA, I now live in Billings, MT where I enjoy
          working out, thrift shopping, and home improvement projects.
        </p>
      </div>
    </>
  );
}
