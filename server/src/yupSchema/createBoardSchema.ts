import * as yup from 'yup';

export const createBoardSchema = yup
  .object({
    content: yup.string().typeError('invalid type')
  })
  .required();
