import {TRANSLATIONS_EN} from '../en';

export const resources = {
  en: {
    translation: TRANSLATIONS_EN,
    label: 'English',
  },
};

export const allLanguages = Object.keys(resources).map((key) => {
  return {
    value: key,
    label: resources[key].label,
  };
});
