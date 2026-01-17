'use client';

import Icon from './Icon.jsx';
import Image from "next/image";

const TestimonialCard = ({ quote, author, title, imageSrc, imageWidth, imageHeight, imageScale }) => (
  <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-50 h-full flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500">
    
    {/* Décoration : Grosse guillemet en arrière-plan */}
    <div className="absolute top-6 left-6 opacity-10 text-[#AD9551]">
       <Icon name="Quote" className="w-16 h-16 rotate-180" />
    </div>

    {/* Image Avatar avec cercle animé */}
    <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full p-1 border-2 border-[#AD9551]/30 group-hover:border-[#AD9551] transition-colors duration-300">
            <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                    src={imageSrc}
                    alt={`Photo de ${author}`}
                    width={imageWidth || 100} 
                    height={imageHeight || 100} 
                    className={`object-cover w-full h-full scale-${imageScale || 100}`}
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100/f3f4f6/9ca3af?text=Client"; }}
                />
            </div>
        </div>
    </div>

    {/* Texte */}
    <div className="relative z-10">
        <p className="text-gray-600 italic mb-6 text-lg leading-relaxed font-light">
            "{quote}"
        </p>
        
        <div className="border-t border-gray-100 pt-6 w-16 mx-auto mb-4 group-hover:w-24 group-hover:border-[#AD9551] transition-all duration-500"></div>

        <h4 className="font-bold text-gray-900 text-lg uppercase tracking-wide">{author}</h4>
        <p className="text-[#AD9551] text-sm font-medium">{title}</p>
    </div>
  </div>
);

export default TestimonialCard;