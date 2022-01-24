import * as yup from "yup";

export const usersFromLocalStorageSchema = yup
  .array(
    yup.object({
      id: yup.number().required(),
      email: yup.string().required(),
      name: yup.string(),
    })
  )
  .nullable();

export const itemsFromLocalStorageSchema = yup
  .array(
    yup
      .object({
        description: yup.string().required(),
        id: yup.number().required(),
      })
      .optional()
  )
  .nullable();

export const tokenSchema = yup
  .object({
    accessToken: yup.string().required(),
  })
  .nullable();
