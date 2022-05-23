/* 

Some thoughts on all this. 
-Maybe one big JSON file, maybe not, but probably.
-Add keys: yearOfPublication, featured 
-This is if it's okay to not have perfectly fine grained control over order within the years themselves, maybe random within
-Or could have yearOfPub be a machine readable date string that involves month of pub, that could be a way for finer grained control
-Have a separate variable for all the years OR if using machine readable code then just sort by that in one big array

-instead of listing each poem/piece on hover for pubs with multiple
  * first filter the array or something finding pubs with multiple pieces and deal witht hem such when it gets output you see "multiple pieces" instead of title

forge, bayour sycamore on top


I'm gonna need to pull all this js into its own file and just import it, I think.

Take FictionPubs and forEach grab the pubTitle and then run a function to filter how many in FictionPubs have that, so in the filter, create a temporary array to push all of them that match and then if that array's length is greater than 1... ??

allPubs.forEach then inside do another forEach and if the orginal pubTitle matches ++ a counter in a temp object that also gets the pubTitle and url. Then, iterate over that object and for each one with a counter over 1 go back to the original array and push a new element with that pubtitle, title of X stories/poems depending on the original genre (passed to function as an arg or pulled from the original object and appended to that temp object, if all pubs are one json file). then splice slice whatever all of the other objects with that pubTitle. So now, we have our new stand-in and none of the originals.

*/

import PageHeading from "../components/PageHeading";
import FictionPubs from "../data/publications/fiction.json";
import PoetryPubs from "../data/publications/poetry.json";
import ScholarlyPubs from "../data/publications/scholarly.json";
import Link from "next/link";
import styled from "styled-components";
import _ from "lodash";

export default function AllWriting() {
  const PubsUl = styled.ul`
    text-align: center;
    padding: 0px;
    margin: 0px;
   
    .box {
      position: relative;
      min-width: 140px;
      z-index: 0;
    }
    .title1,
    .title2 {
      transition: 0.9s;
      /* border-bottom: 1px solid black; */
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
    .featured {
      font-size: 1.4rem;
    }
    li {
      display: inline-block;
      list-style-type: none;
      margin: 1.25rem 1.5rem;
      font-size: 1.2rem;
    }
    a.yesUnderline {
      border-bottom: 1px solid var(--black-transparent-1);
      text-decoration: none;
    }
    a.yesUnderline:hover {
      border-bottom: 1px solid var(--black-transparent-1);
      /* text-decoration: 1px solid black; */
    }

    a.noUnderline {
      text-decoration: none;
      border-bottom: 0px dotted black;
    }
    .nowrap {
      white-space: nowrap;
    }
  `;

  let combinePubs = (...args) => {
    let arrayToReturn = [];
    args.forEach((i) => {
      i.forEach((p) => {
        arrayToReturn.push(p);
      });
    });
    return arrayToReturn;
  };

  const duplicateFixerUpper = (
    mainArray,
    publicationTitle,
    publicationGenre
  ) => {
    let tempAllPubsArr = [];
    // This object does a few things for us. It's what we will use later to get the information desired on the screen (so, title, pubtitle, and url) but also we track how many of this publication there are and the first location of it in the original array.
    let tempObj = {
      title: "",
      pubTitle: publicationTitle,
      url: "",
      count: 0,
      genre: publicationGenre,
      firstIndex: 0,
    };
    mainArray.forEach((i, index) => {
      if (i.pubTitle == publicationTitle) {
        // console.log("got one!", index);
        tempObj.count++; //tracking how many of this publication we have in total
        tempObj.url = i.url; //presumes the url will be the same for each one
        if (tempObj.firstIndex == 0) {
          tempObj.firstIndex += index;
        } //snags the index of the first instance in the master array
      } else {
        tempAllPubsArr.push(i); // if it isn't a publiction of the one we are looking for we just put it into the new array untouched
      }
    });
    //conditionals to know whether to say stories or poems
    if (publicationGenre == "fiction") {
      tempObj.title = `${tempObj.count} Stories`;
    }
    if (publicationGenre == "poetry") {
      tempObj.title = `${tempObj.count} Poems`;
    }
    tempAllPubsArr.splice(tempObj.firstIndex, 0, tempObj); //this inserts our new object at the first index we took from roughly preserving overall ordering
    // console.log(tempAllPubsArr);
    return tempAllPubsArr;
  };

  let allPubsCombined = combinePubs(
    FictionPubs.fiction,
    PoetryPubs.poetry,
    ScholarlyPubs.scholarly
  );

  const listOfPubsWithMultipleThings = [
    { title: "Sonder Review", genre: "fiction" },
    { title: "Beech Street Review", genre: "poetry" },
    { title: "Thin Air Magazine", genre: "poetry" },
    { title: "Yellow Chair Review", genre: "poetry" },
    { title: "Lehigh Valley Vanguard", genre: "poetry" },
  ];

  /* 
  Yeah, I needed recursion for this... but this works.
  Each one takes the prior one as its source so that the deduping builds on each other.
  Will have to manually add new pubs to the listofpubswithmultiplethings above and then add lines below
  
  */

  let dedupe0 = duplicateFixerUpper(
    allPubsCombined,
    listOfPubsWithMultipleThings[0].title,
    listOfPubsWithMultipleThings[0].genre
  );
  let dedupe1 = duplicateFixerUpper(
    dedupe0,
    listOfPubsWithMultipleThings[1].title,
    listOfPubsWithMultipleThings[1].genre
  );
  let dedupe2 = duplicateFixerUpper(
    dedupe1,
    listOfPubsWithMultipleThings[2].title,
    listOfPubsWithMultipleThings[2].genre
  );
  let dedupe3 = duplicateFixerUpper(
    dedupe2,
    listOfPubsWithMultipleThings[3].title,
    listOfPubsWithMultipleThings[3].genre
  );
  let dedupe4 = duplicateFixerUpper(
    dedupe3,
    listOfPubsWithMultipleThings[4].title,
    listOfPubsWithMultipleThings[4].genre
  );

  let featuredPubsArr = dedupe4.filter((pub) => pub.featured);
  let nonFeaturedPubsArr = dedupe4.filter((pub) => !pub.featured);

  return (
    <>
      <PageHeading
        content={"Writing"}
        image={"/assets/52VintageSunbursts/Black/PNG/Black-10.png"}
      />
      <div id="featured-pubs">
        <PubsUl>
          {featuredPubsArr.map((pub) => {
            let title = pub.title;
            let pubTitle = pub.pubTitle;
            let wantUnderline = true;
            let doWeHaveUrl = true;
            if (pub.url == "" || pub.url == null || pub.url == undefined) {
              wantUnderline = false;
              doWeHaveUrl = false;
            }
            return (
              <li className="box featured" key={`${pub.pubTitle}_${pub.title}`}>
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
                    <div
                      className="featured"
                      key={`${pub.pubTitle}_${pub.title}`}
                    >
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
              </li>
            );
          })}
        </PubsUl>
      </div>
      <div id="other-pubs">
        <PubsUl>
          {nonFeaturedPubsArr.map((pub) => {
            let title = pub.title;
            let pubTitle = pub.pubTitle;
            let wantUnderline = true;
            let doWeHaveUrl = true;
            if (pub.url == "" || pub.url == null || pub.url == undefined) {
              wantUnderline = false;
              doWeHaveUrl = false;
            }
            return (
              <li className="box" key={`${pub.pubTitle}_${pub.title}`}>
                {doWeHaveUrl ? (
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
                  <div key={`${pub.pubTitle}_${pub.title}`}>
                    <a
                      className={`${
                        wantUnderline ? "yesUnderline" : "noUnderline"
                      }`}
                    >
                      <span className="nowrap title2">{title}</span>&nbsp;
                      <span className="nowrap bold title1">{pubTitle}</span>
                    </a>
                  </div>
                )}
              </li>
            );
          })}
        </PubsUl>
      </div>
    </>
  );
}
