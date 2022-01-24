import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, FormikHelpers, Form } from "formik";
import { MyFormValues } from "../../types/login/myFormValues";
import { registrationSchema } from "../../schema/yup/registration";
import { registration } from "../../api/auth/registration";
import { Container, Title, Label, Input, Errors, Button } from "./style";

export function Registration() {
  const history = useHistory();
  const initialValues: MyFormValues = {
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <>
      <Link className="btn" to="/">
        Main page
      </Link>
      <Container>
        <Title>Registration</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={registrationSchema}
          validateOnBlur
          onSubmit={async (
            values: MyFormValues,
            actions: FormikHelpers<MyFormValues>
          ) => {
            await registration({
              email: values.email,
              password: values.password,
            });
            actions.resetForm();
            history.push("/auth/login");
          }}
        >
          {({
            values,
            errors,
            handleBlur,
            handleChange,
            touched,
            isValid,
            dirty,
          }) => (
            <Form>
              <Label htmlFor="email">
                Email
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Label>
              {touched.email && errors.email && <Errors>{errors.email}</Errors>}

              <Label htmlFor="confirmEmail">
                confirm Email
                <Input
                  type="email"
                  name="confirmEmail"
                  value={values.confirmEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Label>
              {touched.confirmEmail && errors.confirmEmail && (
                <Errors>{errors.confirmEmail}</Errors>
              )}
              <Label htmlFor="password">
                password
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Label>
              {touched.password && errors.password && (
                <Errors>{errors.password}</Errors>
              )}

              <Label htmlFor="confirmPassword">
                confirmPassword
                <Input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Label>
              {touched.confirmPassword && errors.confirmPassword && (
                <Errors>{errors.confirmPassword}</Errors>
              )}
              <Button
                className="btn"
                type="submit"
                disabled={!isValid && !dirty}
              >
                submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
