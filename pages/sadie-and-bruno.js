import PageHeading from "../components/PageHeading";
import styled from "styled-components";

let FlexedImages = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  img {margin: 1rem;max-width:95%;}
`
let Card = styled.div`
  padding: 1rem;
  background-color: var(--color-secondary-2);
  border-radius: 5px;
  
  h3 {
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-size: 2rem;
    margin:0px;
  }
  .details li {list-style-type:none;text-align:center;}
   .details ul {padding:0px;margin:0px;color:white}
`;

export default function SadieAndBruno() {
  return (
    <>
      <PageHeading content={"Sadie & Bruno"} />
      <p>
        We feel that fate brought Sadie and Bruno together, two single AKC
        registered dogs, one town apart in Idaho. Better than the odds on most
        dating sites. We wanted a natural pregnancy, and this was a first for
        both Sadie and Bruno.
      </p>
      <p>
        <FlexedImages>
          <Card>
            <h3>Bruno</h3>
            <img src="https://via.placeholder.com/350" alt="" />
            <div className="details">
              <ul>
                <li><span className="bold">AKC Dog Number</span>: WS69457706 </li>
                <li>Dog Name: Sir Bruno Porter</li>
                <li>Sex: Male Color: Brown</li>
              </ul>
            </div>
          </Card>
          <img src="https://via.placeholder.com/350" alt="" />
        </FlexedImages>
      </p>
    </>
  );
}
