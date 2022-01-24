import * as yup from 'yup';

export const idSchema = yup
  .object({
    id: yup.number().typeError('invalid type').required("don't be empty")
  })
  .required();
