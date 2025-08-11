'use client';

import * as LucideIcons from 'lucide-react';
const Icon = ({ name, className }) => {
  // Récupère l'icône de l'objet LucideIcons
  const LucideIcon = LucideIcons[name];

  // Si l'icône existe, on la rend, sinon on met un fallback
  return LucideIcon ? <LucideIcon className={className} /> : <span>{name} not found</span>;
};

export default Icon;