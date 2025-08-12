'use client';

// Composant SectionTitle
const SectionTitle = ({ title, subtitle,subtitle1,subtitle2 }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2 italic font-sans">{subtitle}</p>    
<p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2 ">{subtitle1}</p>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle2}</p>

  </div>
);
export default SectionTitle;