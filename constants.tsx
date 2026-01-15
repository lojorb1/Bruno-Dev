
import React from 'react';
import { 
  Code2, 
  Server, 
  ShieldCheck, 
  Database, 
  Zap, 
  Globe
} from 'lucide-react';
import { Technology } from './types';

export const SERVICES_ICONS = [
  <Code2 className="w-6 h-6 text-blue-400" />,
  <Database className="w-6 h-6 text-purple-400" />,
  <Globe className="w-6 h-6 text-cyan-400" />,
  <Server className="w-6 h-6 text-blue-400" />,
  <ShieldCheck className="w-6 h-6 text-green-400" />,
  <Zap className="w-6 h-6 text-yellow-400" />
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'PHP', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Artificial Intelligence', category: 'backend' },
  { name: 'React.js', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'React Native', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'HTML/CSS/JS', category: 'frontend' },
  { name: 'RESTful APIs', category: 'backend' },
  { name: 'Docker', category: 'infra' },
  { name: 'AWS', category: 'infra' },
  { name: 'Git', category: 'infra' },
  { name: 'Linux/Bash', category: 'infra' },
  { name: 'Cybersecurity', category: 'security' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MariaDB', category: 'backend' },
  { name: 'MySQL', category: 'backend' }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/lojorb1',
  linkedin: 'https://www.linkedin.com/in/brunodeveu/',
  whatsapp: 'https://wa.me/5511988524276'
};
