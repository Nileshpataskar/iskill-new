interface OutcomeCardProps {
  logo: string;
  text: string;
  author: string;
  designation: string;
}

const OutcomeCard = ({ logo, text, author, designation }: OutcomeCardProps) => {
  return (
    <div className="outcome-card relative bg-gray-100 rounded-xl p-8 md:p-10 shadow-sm transition-all duration-300 border-2 border-transparent flex flex-col mt-12 mb-4">
      {/* Floating Logo above card */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-lg px-5 py-3 shadow-md flex items-center justify-center z-20">
        <div className="bg-red-600 rounded-md px-5 py-2.5 flex items-center justify-center">
          <img 
            src={logo} 
            alt="Company logo" 
            className="h-5 object-contain max-w-[70px]"
          />
        </div>
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-700 max-h-40 leading-relaxed mb-6 text-base flex-grow pt-2 overflow-y-auto">
        {text}
      </p>
      
      {/* Horizontal Line */}
      <hr className="border-gray-300 mb-4" />
      
      {/* Author Info */}
      <div className="mt-8">
        <p className="font-semibold text-gray-800 text-base mb-1">— {author}</p>
        <p className="text-sm text-gray-600">{designation}</p>
      </div>
    </div>
  );
};

export default OutcomeCard;
