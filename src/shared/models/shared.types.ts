import { DefaultTFuncReturn } from 'i18next';

// MUI expects normal-case not uppercase
export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

export enum Page {
  Intro = 'Intro',
  AboutMe = 'AboutMe',
  Archive = 'Archive',
  Skill = 'Skill',
  Career = 'Career',
  Project = 'Preject',
}

export type ProjectType = {
  title: DefaultTFuncReturn | string;
  subtitle: DefaultTFuncReturn | string;
  imgs: {
    src: string;
    alt: string;
  }[];
  descriptions: DefaultTFuncReturn[] | string[];
  lists: {
    title: DefaultTFuncReturn | string;
    detail: DefaultTFuncReturn | string;
    link?: boolean;
  }[];
};
