export type CollectionName = "blog" | "projects" | "talks";

export type GlobalSite = {
  title: string;
  description: string;
  author: string;
  authorPhotoSrc: string;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
};

export const GLOBAL: GlobalSite = {
  title: "zooeywm 的小窝",
  description: "zooeywm 的小窝",
  author: "zooeywm",
  authorPhotoSrc: "/zooeywm.png",
  logo: {
    darkThemeSrc: "/logo/dark.svg",
    lightThemeSrc: "/logo/light.svg",
  },
};

type CollectionSite = {
  pageSize: number;
};

type HomeSite = {
  blogEntries?: number;
  projectEntries?: number;
  talkEntries?: number;
};

export const HOME: HomeSite = {
  blogEntries: 5,
  projectEntries: 3,
  talkEntries: 3,
};

type BlogSite = CollectionSite & {
  license: {
    name: string;
    href: string;
  };
};

export const BLOG: BlogSite = {
  pageSize: 10,
  license: {
    name: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0",
  },
};

export const PROJECTS: CollectionSite = {
  pageSize: 10,
};

export const TALKS: CollectionSite = {
  pageSize: 10,
};

export const TAGS: CollectionSite = {
  pageSize: 10,
};

type ContactInfo = {
  type: string;
  href: string;
  displayAs?: string;
  logo?: string;
};

type ContactSite = ContactInfo[];

export const CONTACT: ContactSite = [
  {
    type: "Email",
    href: "mailto:zooeywm@gmail.com",
    displayAs: "Gmail",
    logo: "/logo/gmail.svg",
  },
  {
    type: "Github",
    href: "https://github.com/zooeywm",
    displayAs: "Github",
    logo: "/logo/github.svg",
  },
];
