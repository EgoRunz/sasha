import { Link } from "react-router-dom";
import { useContext } from "react";
import { Formik, FormikHelpers, Form } from "formik";
import { loginSchema } from "../../schema/yup/login";
import { MyFormValues } from "../../types/login/myFormValues";
import { AuthContext } from "../../context/authContext";
import {
  Container,
  Title,
  Label,
  Button,
  ValidationText,
  Input,
} from "./style";
import { login } from "../../api/auth/login";

export function Login() {
  const auth = useContext(AuthContext);
  // const history = useHistory();
  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <Link className="btn" to="/">
        Main page
      </Link>
      <Container>
        <Title>Login</Title>
        <Formik
          initialValues={initialValues}
          validateOnBlur
          validationSchema={loginSchema}
          onSubmit={async (
            values: MyFormValues,
            actions: FormikHelpers<MyFormValues>
          ) => {
            const response = await login({
              email: values.email,
              password: values.password,
            });
            auth.setToken(response.data.token);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            dirty,
          }) => (
            <Form>
              <Label htmlFor="email">
                Email
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </Label>
              {touched.email && errors.email && (
                <ValidationText>{errors.email}</ValidationText>
              )}
              <Label htmlFor="password">
                password
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </Label>
              {touched.password && errors.password && (
                <ValidationText>{errors.password}</ValidationText>
              )}
              <Button
                className="btn"
                type="submit"
                disabled={!isValid && !dirty}
              >
                Sing in
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
