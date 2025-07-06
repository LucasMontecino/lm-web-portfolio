export interface WorkLinks {
  github: string;
  project: string;
}

export interface WorkList {
  id: number;
  projectName: string;
  description: string;
  images: string[];
  links: WorkLinks;
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
