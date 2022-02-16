/* 

Some thoughts on all this. 
-Maybe one big JSON file, maybe not, but probably.
-Add keys: yearOfPublication, featured 
-This is if it's okay to not have perfectly fine grained control over order within the years themselves, maybe random within
-Or could have yearOfPub be a machine readable date string that involves month of pub, that could be a way for finer grained control
-Have a separate variable for all the years OR if using machine readable code then just sort by that in one big array

-instead of listing each poem/piece on hover for pubs with multiple
  * first filter the array or something finding pubs with multiple pieces and deal witht hem such when it gets output you see "multiple pieces" instead of title


*/


import PageHeading from "../components/PageHeading";
import FictionPubs from "../data/publications/fiction.json";
import Link from "next/link";
import styled from "styled-components";

export default function Writing() {
  const PubsUl = styled.ul`
    text-align: center;

    .box {
      position: relative;
      min-width: 140px;
    }
    .title1,
    .title2 {
      transition: .7s;
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
            let wantUnderline = true
            let doWeHaveUrl = true
            let linkString = `<Link href="${pub.url}">`;
            if (pub.url == "" || pub.url == null || pub.url == undefined){wantUnderline=false; doWeHaveUrl = false
            }
            return (
              <>
                <li className="box" key={pub.title}>
                  {
                    //Check if message failed
                    doWeHaveUrl ? (
                      <Link href={pub.url}>
                        <a
                          className={`${
                            wantUnderline ? "yesUnderline" : "noUnderline"
                          }`}
                        >
                          <span className="nowrap title2">{title}</span>&nbsp;
                          <span className="nowrap bold title1">{pubTitle}</span>
                        </a>
                      </Link>
                    ) : (
                      <div>
                        <a
                          className={`${
                            wantUnderline ? "yesUnderline" : "noUnderline"
                          }`}
                        >
                          <span className="nowrap title2">{title}</span>&nbsp;
                          <span className="nowrap bold title1">{pubTitle}</span>
                        </a>
                      </div>
                    )
                  }
                  {/* ${doWeHaveUrl ? linkString : `<div>`} */}
                  {/* <a
                    className={`${
                      wantUnderline ? "yesUnderline" : "noUnderline"
                    }`}
                  >
                    <span className="nowrap title2">{title}</span>&nbsp;
                    <span className="nowrap bold title1">{pubTitle}</span>
                  </a> */}
                  {/* ${doWeHaveUrl ? `  </Link>` : `</div>`} */}
                </li>
              </>
            );
          })}
        </PubsUl>
      </div>
    </>
  );
}
