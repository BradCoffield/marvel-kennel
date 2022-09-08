import PageHeading from "../components/PageHeading";
import styled from "styled-components";
import FlexedImages from "../components/styles/FlexedImages";
 
let Card = styled.div`
  padding: 0.11rem;
  /* background-color: var(--color-secondary-2); */
  background-color: var(--color-primary);
  border-radius: 5px;

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
`;

export default function SadieAndBruno() {
  return (
    <>
      <PageHeading content={"Sadie & Bruno"} />
      <FlexedImages>
        <Card><img src="https://via.placeholder.com/450x350" alt="" /></Card>
      </FlexedImages>
      <p style={{margin: "3rem 0rem"}}>
        We feel that fate brought Sadie and Bruno together, two single AKC
        registered dogs, one town apart in Idaho. Better than the odds on most
        dating sites. We wanted a natural pregnancy, and this was a first for
        both Sadie and Bruno.
      </p>
      <p>
        <FlexedImages>
          <Card>
            <h3>Sadie</h3>
            <img src="https://via.placeholder.com/350" alt="" />
            <div className="details">
              <ul>
                <li>
                  <span className="bold">AKC Dog Number</span>: WS62742302
                </li>
                <li>
                  <span className="bold">Dog Name</span>: Sadie Nashama Evans
                </li>
                <li>
                  <span className="bold">Sex</span>: Female
                </li>
                <li>
                  <span className="bold">Color</span>: Brown
                </li>
              </ul>
            </div>
          </Card>
          <Card>
            <h3>Bruno</h3>
            <img src="https://via.placeholder.com/350" alt="" />
            <div className="details">
              <ul>
                <li>
                  <span className="bold">AKC Dog Number</span>: WS69457706{" "}
                </li>
                <li>
                  <span className="bold">Dog Name</span>: Sir Bruno Porter
                </li>
                <li>
                  <span className="bold">Sex</span>: Male
                </li>
                <li>
                  <span className="bold">Color</span>: Brown
                </li>
              </ul>
            </div>
          </Card>
        </FlexedImages>
      </p>
    </>
  );
}
