interface OutcomeCardProps {
  text: string;
  author: string;
  designation: string;
  company?: string;
}

// Function to get initials from name
const getInitials = (name: string): string => {
  // Remove common prefixes like Mr., Ms., Mrs.
  const cleanName = name.replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.)\s*/i, '').trim();

  // Split by space and get first letter of each word
  const parts = cleanName.split(/\s+/);

  if (parts.length >= 2) {
    // Get first letter of first name and last name
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  } else if (parts.length === 1) {
    // If only one name, get first two letters
    return parts[0].substring(0, 2).toUpperCase();
  }

  return '??';
};

const OutcomeCard = ({ text, author, designation, company }: OutcomeCardProps) => {
  const initials = getInitials(author);

  return (
    <div className="outcome-card relative bg-gray-100 rounded-xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-sm transition-all duration-300 border-2 border-transparent flex flex-col mt-10 sm:mt-12 mb-4">
      {/* Floating Initials above card */}
      <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 bg-white rounded-lg px-3 sm:px-5 py-2 sm:py-3 shadow-md flex items-center justify-center z-20">
        <div className="bg-linear-to-br from-red-600/90 via-yellow-600 to-gray-600/10 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-base sm:text-lg md:text-xl">{initials}</span>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 max-h-32 sm:max-h-36 md:max-h-40 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base flex-grow pt-2 sm:pt-3 overflow-y-auto">
        {text}
      </p>

      {/* Horizontal Line */}
      <hr className="border-gray-300 mb-3 sm:mb-4" />

      {/* Author Info */}
      <div className="mt-4 sm:mt-6 md:mt-8">
        <p className="font-semibold text-gray-800 text-sm sm:text-base mb-1">— {author}</p>
        <p className="text-xs sm:text-sm text-gray-600">{designation}</p>
        {company && (
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{company}</p>
        )}
      </div>
    </div>
  );
};

export default OutcomeCard;
