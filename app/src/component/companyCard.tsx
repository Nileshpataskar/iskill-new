interface CompanyCardProps {
  logo: string;
  description: string;
  bg?: string;
}

const CompanyCard = ({ logo, description, bg = "bg-white" }: CompanyCardProps) => {
  return (
    <div
      className={`bg-white w-full md:w-150 flex items-center shadow-md rounded-xl gap-6 p-6 mx-auto`}
    >
      <div className="bg-white shadow-lg rounded-lg p-2 shrink-0">
        <img
          src={logo}
          alt="Company Logo"
          className="h-16 w-16 object-contain"
        />
      </div>

      <p className="text-white md:text-gray-800 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CompanyCard;
