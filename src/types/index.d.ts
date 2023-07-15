export type NavBarItem = {
  option: string;
  href: string;
};

export type Project = {
  name: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  github: string;
  live: string;
  id: string | number;
  date: string;
  category: string;
  tech: string[];
  content: string;
  slug: string;
};

export type Experience = {
  dateStart: string;
  dateEnd: string;
  company: string;
  position: string;
  description: string;
  id: number;
  logo: string;
  tags: string[];
  tech: string[];
  href: string;
  slug: string;
  projects?: string[];
};

export type Tech = {
  id: number;
  name: string;
  logo: string;
  width: number;
  height: number;
};
