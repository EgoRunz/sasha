import {
  tokenSchema,
  usersFromLocalStorageSchema,
} from "../../schema/yup/usersFromLocalStorage";
import { StreamUser } from "../../types/StreamUser";

export const getUsersFromLocalStorage = (): Array<StreamUser> => {
  try {
    const data = localStorage.getItem("users");
    const result = usersFromLocalStorageSchema.validateSync(data);
    return result ?? [];
  } catch (error) {
    console.log(error && error.message);
  }
  return [];
};

export const setUsersToLocalStorage = (values: Array<StreamUser>) => {
  try {
    localStorage.setItem("users", JSON.stringify(values));
  } catch (error) {
    console.log(error);
  }
};

export const getToken = (storageName: string): string | undefined => {
  try {
    let data = localStorage.getItem(storageName);
    const result = tokenSchema.validateSync(data);
    return result?.accessToken ?? undefined;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
