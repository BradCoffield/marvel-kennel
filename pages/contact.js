import { Formik, Form, Field, ErrorMessage } from "formik";
import PageHeading from "../components/PageHeading";
import styled from "styled-components"
import FlexedImages from "../components/styles/FlexedImages";

let Formwrap = styled.div`
  max-width: 1024px;
  padding-bottom: 3rem;
  background: transparent;
  /* padding: 50px 0px 160px 0px; */
  margin: auto;
  background-color: var(--color-primary-2, gray);
  border-radius: 15px;
  box-shadow: 0px 0px 1px var(--color-accent-1);
  .form-unit {
    // max-width: 90%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    /* border-radius: 15px; */
    /* box-shadow: 1px 1px 5px ; */

    input {
      height: 38px;
      border-radius: 5px;
      border: 0px;
      // max-width: 90%;
      font-size: 16px;
    }
    textarea {
      border-radius: 5px;
      border: 0px;
      // max-width: 90%;
      font-size: 16px;
      height: 100px;
    }
    .errorMessage {
      text-transform: uppercase;
      font-size: 0.8em;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: white;
    }
  }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function Contact() {
  return (
    <>
      <PageHeading content={"Contact"} />
      <FlexedImages>
        <img
          src="\assets\SadieBaby.png"
          alt=""
          style={{ "max-width": "250px" }}
        />
        <img
          src="\assets\BrunoBaby.jpg"
          alt=""
          style={{ "max-width": "250px" }}
        />
        <img
          src="\assets\Zeus.JPG.jpg"
          alt=""
          style={{ "max-width": "250px" }}
        />
      </FlexedImages>
      <br />
      <p style={{ textAlign: "center" }}>
        Please be sure to specify if you're interested in adopting a pup or
        sponsoring an adoption for someone else. Thank you!{" "}
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values }),
          })
            .then(() => {
              alert("Success");
              actions.resetForm();
            })
            .catch(() => {
              alert("Error");
            })
            .finally(() => actions.setSubmitting(false));
        }}
        validate={(values) => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const errors = {};
          if (!values.name) {
            errors.name = "Name Required";
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid Email Required";
          }

          return errors;
        }}
      >
        {() => (
          <Formwrap>
            {/* <h2 className="text-center">I'd love to hear from you!</h2> */}
            <Form name="contact" data-netlify={true}>
              <div className="form-unit">
                <label htmlFor="name">Name: </label>
                <Field name="name" />
                <div className="errorMessage">
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div className="form-unit">
                <label htmlFor="email">Email: </label>
                <Field name="email" />
                <div className="errorMessage">
                  <ErrorMessage name="email" className="errorMessage" />
                </div>
              </div>

              <div className="form-unit">
                {" "}
                <label htmlFor="message">Message: </label>
                <Field name="message" component="textarea" />
              </div>
              {/* <ErrorMessage name="message" /> */}
              <button type="submit" id="submit-button">
                Submit
              </button>
            </Form>
          </Formwrap>
        )}
      </Formik>
    </>
  );
}
