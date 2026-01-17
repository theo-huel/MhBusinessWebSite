'use client';

const SectionTitle = ({ title, subtitle, subtitle1, subtitle2, className = "" }) => (
  <div className={`text-center mb-16 ${className}`}>
    {/* Titre Principal */}
    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight relative inline-block">
      {title}
      {/* Petite ligne décorative dorée sous le titre */}
      <span className="block h-1 w-24 bg-[#AD9551] mx-auto mt-4 rounded-full"></span>
    </h2>

    {/* Sous-titres */}
    <div className="space-y-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {subtitle && <p className="italic font-serif text-gray-500">{subtitle}</p>}
        {subtitle1 && <p>{subtitle1}</p>}
        {subtitle2 && <p>{subtitle2}</p>}
    </div>
  </div>
);

export default SectionTitle;