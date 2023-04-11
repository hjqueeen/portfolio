import { DefaultTFuncReturn } from 'i18next';

export type ProjectType = {
  title: DefaultTFuncReturn | string;
  subtitle: DefaultTFuncReturn | string;
  img: string;
  imgAlt: string;
  descriptions: DefaultTFuncReturn[] | string[];
  lists: {
    title: DefaultTFuncReturn | string;
    detail: DefaultTFuncReturn | string;
  }[];
};
