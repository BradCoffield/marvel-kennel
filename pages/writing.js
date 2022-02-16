import PageHeading from "../components/PageHeading";
import FictionPubs from "../data/publications/fiction.json";
import Link from "next/link";
import styled from "styled-components";

export default function Writing() {
  const PubsUl = styled.ul`
    text-align: center;
 
    .box {
      position: relative;
    }
    .title1,
    .title2 {
      transition: 0.3s;
    }
    .title2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      /* HIDE SECOND TITLE */
      opacity: 0;
    }

    /* WHEN BOX IS HOVERED SWAP TITLES */
    .box:hover .title1 {
      opacity: 0;
    }
    .box:hover .title2 {
      opacity: 1;
    }
    li {
      display: inline-block;
      list-style-type: none;
      margin: 1.25rem 1.5rem;
      font-size: 1.2rem;
      /* background-image: var(--noise); */
    }
    a {
      text-decoration: none;
    }
    .nowrap {
      white-space: nowrap;
    }
  `;

  return (
    <>
      <PageHeading
        content={"Writing"}
        image={"/assets/52VintageSunbursts/Black/PNG/Black-10.png"}
      />
      <div>
        <PubsUl>
          {FictionPubs.fiction.map((pub) => {
            let title = pub.title 
            let pubTitle = pub.pubTitle 
            return (
              <>
                {" "}
                <li className="box" key={pub.title}>
                  <Link href={pub.url}>
                    <a>
                      <span className="nowrap title2">{title}</span>&nbsp;
                      <span className="nowrap bold title1">{pubTitle}</span>
                    </a>
                  </Link>
                </li>{" "}
                
              </>
            );
          })}
        </PubsUl>
      </div>
    </>
  );
}
