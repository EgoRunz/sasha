import * as yup from 'yup';
import { AssertsShape, TypeOfShape, ObjectShape } from 'yup/lib/object';

export const validate = <T extends ObjectShape>(
  schema: yup.ObjectSchema<T>,
  payload: unknown
): Promise<AssertsShape<T> | Extract<TypeOfShape<T>, null | undefined>> => {
  return schema.validate(payload);
};
