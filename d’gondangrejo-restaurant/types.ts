// Fix: Added React import to resolve "Cannot find namespace 'React'" errors when using React.ReactNode
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Facility {
  id: string;
  name: string;
  category: 'aksesibilitas' | 'umum' | 'anak';
  icon: React.ReactNode;
}