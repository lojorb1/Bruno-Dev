// Added React import to resolve "Cannot find namespace 'React'" for React.ReactNode
import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'infra' | 'security';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
