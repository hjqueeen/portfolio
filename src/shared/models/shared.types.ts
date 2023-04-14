import { DefaultTFuncReturn } from 'i18next';

// MUI expects normal-case not uppercase
export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

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
