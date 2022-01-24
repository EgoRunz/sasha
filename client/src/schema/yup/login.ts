import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Некорректный email")
    .typeError("Только строка")
    .min(8, "Не менее 8 символов")
    .required("Обятельное поле"),
  password: yup
    .string()
    .typeError("Только строка")
    .min(10, "минимальная длина пароля 10")
    .max(25, "Максимальная длина пароля 25")
    .required("Обязательное поле"),
});
