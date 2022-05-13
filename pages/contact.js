import { Formik, Form, Field, ErrorMessage } from "formik";
import PageHeading from "../components/PageHeading";
import styled from "styled-components"

let Formwrap = styled.div`
  width: 550px;
  background: transparent;
  /* padding: 50px 0px 160px 0px; */
  margin: auto;
  background-color: #9a8e8c;
  border-radius: 15px;
  box-shadow: 0px 0px 1px gray;
  .form-unit {
    max-width: 90%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    /* border-radius: 15px; */
    /* box-shadow: 1px 1px 5px ; */

    input {
      height: 38px;
      border-radius: 5px;
      border: 0px;
      max-width: 90%;
      font-size: 16px;
    }
    textarea {
      border-radius: 5px;
      border: 0px;
      max-width: 90%;
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

export default function Contact() {
  return (
    <>
      <PageHeading
        content={"Contact"}
        image={"/assets/52VintageSunbursts/Black/PNG/Black-04.png"}
      />

      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
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
          //   if (!values.message) {
          //     errors.message = "Message Required";
          //   }
          return errors;
        }}
      >
        {() => (
          <Formwrap>
            <Form>
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
              <button type="submit">Send</button>
            </Form>
          </Formwrap>
        )}
      </Formik>
    </>
  );
}
