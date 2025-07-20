export interface AppTranslations {
  project: {
    title: string;
  };
  project1: {
    title: string;
    subtitle: string;
    descriptions: {
      text1: string;
      text2: string;
      text3: string;
      text4: string;
      text5: string;
      text6: string;
    };
    list1: FeatureItem;
    list2: FeatureItem;
    list3: FeatureItem;
    list4: FeatureItem;
  };
  project2: {
    title: string;
    subtitle: string;
    descriptions: {
      text1: string;
      text2: string;
      text3: string;
      text4: string;
      text5: string;
      text6: string;
    };
    list1: FeatureItem;
    list2: FeatureItem;
    list3: FeatureItem;
    list4: FeatureItem;
    list5: FeatureItem;
    list6: FeatureItem;
    list7: FeatureItem;
  };
  project3: {
    title: string;
    subtitle: string;
    descriptions: {
      text1: string;
      text2: string;
      text3: string;
      text4: string;
      text5: string;
      text6: string;
    };
    list1: FeatureItem;
    list2: FeatureItem;
    list3: FeatureItem;
  };
  intro: {
    title: string;
    subtitle: string;
    description: string;
  };
  introduction: {
    title: string;
    name: string;
    name_detail: string;
    birthday: string;
    birthday_detail: string;
    contact: string;
    contact_detail: string;
    education: string;
    education_detail: string;
    education_detail_more: string;
    email: string;
    email_detail: string;
    address: string;
    address_detail: string;
    profile: {
      text1: string;
      text2: string;
      text3: string;
    };
  };
  skill: {
    title: string;
    frontend: string;
    backend: string;
    version_control: string;
    communication: string;
  };
  archive: {
    title: string;
    github: {
      address: string;
      description: {
        detail: string;
        text1: string;
        text2: string;
        text3: string;
      };
    };
    website: {
      address: string;
      description: {
        detail: string;
        text1: string;
        text2: string;
        text3: string;
      };
    };
  };
  title: string;
}

export type FeatureItem = {
  title: string;
  detail: string;
};
