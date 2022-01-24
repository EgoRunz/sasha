import * as yup from 'yup';

export const registrationSchema = yup
  .object({
    email: yup.string().email().trim().required('required field'),
    password: yup.string().trim().required('required field')
  })
  .required();
