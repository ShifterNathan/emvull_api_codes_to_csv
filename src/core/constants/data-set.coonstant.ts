import { DataSet } from "../interfaces/data-set.interface";

export const getConstDataSet: () => DataSet = () => {
  return {
    db_name: process.env.API_DATABASE,
    user: process.env.API_USER,
    password: process.env.API_PASSWORD,
    LanguageCode: process.env.API_LANGUAGE_CODE,
  } as const;
};