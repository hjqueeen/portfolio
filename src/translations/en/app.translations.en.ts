import { AppTranslations } from '../models/app.translations.interface';

export const appTranslationsEN: AppTranslations = {
  intro: {
    title: 'Hyejin Kim',
    subtitle: 'Web Developer Portfolio',
    description: '',
  },
  introduction: {
    title: 'ABOUT ME',
    name: 'Name',
    name_detail: 'Hyejin Kim',
    education: 'Education',
    education_detail:
      'Seoul National University(Department of Biosystem Engineering)',
    email: 'Email',
    email_detail: 'hjqueeen@gmail.com',
    address: 'Address',
    address_detail: 'Berlin, Germany',
  },
  skill: {
    title: 'SKILLS',
    frontend: 'Frontend',
    backend: 'Backend',
    version_control: 'Version Control',
    communication: 'Communication',
  },
  archive: {
    title: 'ARCHIVING',
    github: {
      address: 'https://github.com/hjqueeen',
      description: {
        detail: 'This is a source code repository.',
        text1: 'Source code for a personal project',
        text2: 'Code practiced while learning the programming language',
        text3: '',
      },
    },
    website: {
      address: 'https://velog.io/@hjqueeen',
      description: {
        detail: 'This blog is for study and knowledge sharing purposes.',
        text1: 'Records to make what I studied truly my own',
        text2: 'Collection of programming knowledge learned as a developer',
        text3: '',
      },
    },
  },
};
