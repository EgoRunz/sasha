import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  email: yup
    .string()
    .typeError("только строка")
    .email("некорректный email")
    .min(4, "не менее 4 символов")
    .required("обязательное поле"),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref("email")], "email не совпадают")
    .required("обязательное поле"),
  password: yup
    .string()
    .typeError("только строка")
    .min(10, "минимальная длина пароля 10 символов")
    .max(25, "максимальная длина пароля 25")
    .required("обязательное поле"),
  confirmPassword: yup
    .string()
    .typeError("только строка")
    .oneOf([yup.ref("password")], "пароли не совпадают")
    .required("обязательное поле"),
});
