'use client';

import Icon from './Icon.jsx';
import Image from "next/image";




// Composant TestimonialCard
const TestimonialCard = ({ quote, author, title, imageSrc, onToggle, imageWidth, imageHeight, imageScale }) => (

  <div
    onClick={onToggle}
    className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 ease-in-out hover:scale-101 flex flex-col items-center text-center  border border-gray-100">
    <div className="w-30 h-30 rounded-full border-4 border-[#AD9551] flex items-center justify-center overflow-hidden mb-6">
      <Image
        src={imageSrc}
        alt={`Photo de ${author}`}
        width={imageWidth} 
        height={imageHeight} 
        style={{ left: '0px' }} 
        className={`object-cover scale-${imageScale}`}
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/96x96/E0E7FF/4F46E5?text=Client";
        }}
      />

    </div>


    <Icon name="Quote" className="w-10 h-10 text-[#AD9551 mb-4" />
    <p className="text-gray-700 italic mb-4 text-lg">"{quote}"</p>
    <p className="font-bold text-gray-900">{author}</p>
    <p className="text-gray-500 text-sm">{title}</p>
  </div>
);

export default TestimonialCard;


