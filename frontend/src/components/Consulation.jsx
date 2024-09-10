// eslint-disable-next-line react/prop-types
const ConsultationCard = ({ Icon, title }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
    {Icon && <Icon />}
    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
  </div>
);

const VeterinarianIcon = () => (
  <svg
    className="w-16 h-16 text-orange"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    />
  </svg>
);

const NutritionistIcon = () => (
  <svg
    className="w-16 h-16 text-orange"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    />
  </svg>
);

const OnlineConsultation = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center mb-2">Online</h1>
    <h2 className="text-5xl font-bold text-center mb-8">CONSULTATION</h2>
    <div className="h-1 w-24 bg-red-500 mx-auto mb-12"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ConsultationCard
        icon={<VeterinarianIcon />}
        title="Veterinarian video call"
      />
      <ConsultationCard
        icon={<NutritionistIcon />}
        title="Nutritionist video call"
      />
    </div>
  </div>
);

export default OnlineConsultation;
