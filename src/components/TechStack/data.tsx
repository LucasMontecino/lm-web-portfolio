import type { TechStack } from '@/types';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiReactquery,
  SiTypescript,
} from 'react-icons/si';
import { FaNode, FaDatabase } from 'react-icons/fa';

export const techStack: TechStack[] = [
  { id: 1, name: 'HTML', icon: <SiHtml5 /> },
  { id: 2, name: 'CSS', icon: <SiCss3 /> },
  { id: 3, name: 'JavaScript', icon: <SiJavascript /> },
  { id: 4, name: 'React', icon: <SiReact /> },
  { id: 5, name: 'Next.js', icon: <SiNextdotjs /> },
  { id: 6, name: 'Redux', icon: <SiRedux /> },
  { id: 7, name: 'Node.js', icon: <FaNode /> },
  { id: 8, name: 'Express.js', icon: <SiExpress /> },
  { id: 9, name: 'SQL', icon: <FaDatabase /> },
  { id: 10, name: 'React Query', icon: <SiReactquery /> },
  { id: 11, name: 'TypeScript', icon: <SiTypescript /> },
];
