import { create } from 'zustand';

// Models
import { Page, Theme } from '../models/shared.types';

export interface SharedState {
  theme: Theme;
  page: string | undefined;
  titleColor: string | undefined;
  setPage: (page: Page | undefined) => void;
  setTitleColor: (titleColor: string | undefined) => void;
  setTheme: (theme: Theme) => void;
}

/**
 * Searches string tag in Theme enum
 * @param theme Theme string
 * @returns Valid Theme enum
 */
const getThemeEnumByStringVal = (theme: string) => {
  let foundTheme = Object.entries(Theme).find((enumKV) => enumKV[0] === theme);
  return foundTheme && foundTheme[1] ? foundTheme[1] : Theme.Light;
};

export const useSharedStore = create<SharedState>((set) => ({
  notification: undefined,
  theme: getThemeEnumByStringVal(localStorage.getItem('app:theme') || 'light'),
  page: undefined,
  titleColor: undefined,
  setPage: (page: Page | undefined) => set({ page }),
  setTitleColor: (titleColor: string | undefined) => set({ titleColor }),
  setTheme: (theme: Theme) => {
    set({ theme });
    document.documentElement.setAttribute('class', theme);
    localStorage.setItem('app:theme', theme);
  },
}));
