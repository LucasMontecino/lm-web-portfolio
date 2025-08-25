export interface WorkLinks {
  github: string;
  project: string;
}

export interface IWorkList {
  id: number;
  projectName: string;
  description: string;
  images: string[];
  links: WorkLinks;
  stack: string[];
}

export interface TechStack {
  id: number;
  name: string;
  icon: React.ReactNode;
}

export interface Navbar {
  id: number;
  name: string;
  href: string;
}
