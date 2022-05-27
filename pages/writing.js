import PageHeading from "../components/PageHeading";
import FictionPubs from "../data/publications/fiction.json";
import PoetryPubs from "../data/publications/poetry.json";
import NonfictionPubs from "../data/publications/nonfiction.json"
import Link from "next/link";
import styled from "styled-components";
import parse from "html-react-parser";


export default function Writing() {
  const PubsUlSimpleList = styled.ul`
    li {
      list-style-type: none;
      margin-bottom: 1.5rem;
    }
  `;
  const PubsUl = styled.ul`
    text-align: center;

    .box {
      position: relative;
      min-width: 140px;
    }
    .title1,
    .title2 {
      transition: 0.7s;
    }
    .title2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      /* HIDE SECOND TITLE */
      opacity: 0;
      max-width: 190px;
      overflow: hidden;
      text-overflow: ellipsis;
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
    }
    a.yesUnderline:hover {
      text-decoration: 1px solid black;
    }

    a.noUnderline {
      text-decoration: none;
      border-bottom: 0px dotted black;
    }
    .nowrap {
      white-space: nowrap;
    }
  `;
  console.log(FictionPubs, "eyyyyyyyyy");
  let selectedFiction = FictionPubs.fiction.filter((pub) => pub.featured);
  let selectedPoetry = PoetryPubs.poetry.filter((pub) => pub.featured);
  console.log(selectedFiction, "EAYAHD");
  console.log(selectedPoetry, "poasdf");
  return (
    <>
      <PageHeading
        content={"Writing"}
        image={"/assets/writing_page_sunburst.png"}
      />
      <div id="writing-page-content">
        <h2>Selected Poetry</h2>
        <PubsUlSimpleList>
          {selectedPoetry.map((pub) => {
            let title = pub.title;
            let pubTitle = pub.pubTitle;

            // let linkString = `<Link href="${pub.url}">`;

            /* Dealing with the variability of URL existence */
            let wantUnderline = true;
            let doWeHaveUrl = true;
            if (pub.url == "" || pub.url == null || pub.url == undefined) {
              wantUnderline = false;
              doWeHaveUrl = false;
            }

            let additionalNote = "";
            if (pub.additionalNote) {
              additionalNote = `(${pub.additionalNote})`;
            }

            /* Do we want to include forthcoming? */
            let forthcomingText = "";
            if (pub.forthcoming) {
              forthcomingText = `(forthcoming)`;
            }
            return (
              <>
                <li className="box" key={pub.title}>
                  "
                  {
                    //Check if message failed
                    doWeHaveUrl ? (
                      <Link href={pub.url}>
                        <a
                          target="_blank"
                          className={`${
                            wantUnderline ? "yesUnderline" : "noUnderline"
                          }`}
                        >
                          {title}
                        </a>
                      </Link>
                    ) : (
                      <a
                        className={`${
                          wantUnderline ? "yesUnderline" : "noUnderline"
                        }`}
                      >
                        {title}
                      </a>
                    )
                  }
                  "&nbsp;in <em>{pubTitle}</em> {forthcomingText}
                </li>
              </>
            );
          })}
        </PubsUlSimpleList>
        <h2>Selected Fiction</h2>
        <PubsUlSimpleList>
          {selectedFiction.map((pub) => {
            let title = parse(pub.title);
            let pubTitle = pub.pubTitle;

            // let linkString = `<Link href="${pub.url}">`;

            /* Dealing with the variability of URL existence */
            let wantUnderline = true;
            let doWeHaveUrl = true;
            if (pub.url == "" || pub.url == null || pub.url == undefined) {
              wantUnderline = false;
              doWeHaveUrl = false;
            }

            let additionalNote = "";
            if (pub.additionalNote) {
              const temp = `(${pub.additionalNote})`;
              additionalNote = parse(temp)
            }

            /* Do we want to include forthcoming? */
            let forthcomingText = "";
            if (pub.forthcoming) {
              forthcomingText = `(forthcoming)`;
            }
            return (
              <>
                <li className="box" key={pub.title}>
                  "
                  {
                    //Check if message failed
                    doWeHaveUrl ? (
                      <Link href={pub.url}>
                        <a
                          target="_blank"
                          className={`${
                            wantUnderline ? "yesUnderline" : "noUnderline"
                          }`}
                        >
                          {title}
                          {/* <span className="nowrap bold title1">{pubTitle}</span> */}
                        </a>
                      </Link>
                    ) : (
                      <a
                        className={`${
                          wantUnderline ? "yesUnderline" : "noUnderline"
                        }`}
                      >
                        {title}
                        {/* <span className="nowrap bold title1">{pubTitle}</span> */}
                      </a>
                    )
                  }
                  "&nbsp;in <em>{pubTitle}</em> {additionalNote}
                  {forthcomingText}
                </li>
              </>
            );
          })}
        </PubsUlSimpleList>

        <h2>Selected Nonfiction</h2>
        <PubsUlSimpleList>
          {NonfictionPubs.nonfiction.map((pub) => {
            let title = pub.title;
            let pubTitle = pub.pubTitle;

            // let linkString = `<Link href="${pub.url}">`;

            /* Dealing with the variability of URL existence */
            let wantUnderline = true;
            let doWeHaveUrl = true;
            if (pub.url == "" || pub.url == null || pub.url == undefined) {
              wantUnderline = false;
              doWeHaveUrl = false;
            }

            let additionalNote = "";
            if (pub.additionalNote) {
              additionalNote = `(${pub.additionalNote})`;
            }

            /* Do we want to include forthcoming? */
            let forthcomingText = "";
            if (pub.forthcoming) {
              forthcomingText = `(forthcoming)`;
            }
            return (
              <>
                <li className="box" key={pub.title}>
                  "
                  {
                    //Check if message failed
                    doWeHaveUrl ? (
                      <Link href={pub.url}>
                        <a
                          target="_blank"
                          className={`${
                            wantUnderline ? "yesUnderline" : "noUnderline"
                          }`}
                        >
                          {title}
                          {/* <span className="nowrap bold title1">{pubTitle}</span> */}
                        </a>
                      </Link>
                    ) : (
                      <a
                        className={`${
                          wantUnderline ? "yesUnderline" : "noUnderline"
                        }`}
                      >
                        {title}
                        {/* <span className="nowrap bold title1">{pubTitle}</span> */}
                      </a>
                    )
                  }
                  "&nbsp;in <em>{pubTitle}</em> {additionalNote}
                  {forthcomingText}
                </li>
              </>
            );
          })}
        </PubsUlSimpleList>
      </div>
    </>
  );
}
