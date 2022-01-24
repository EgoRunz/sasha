import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup.string().email().trim().required('обязательное поле'),
    password: yup.string().trim().required('обязательное поле')
  })
  .required();
