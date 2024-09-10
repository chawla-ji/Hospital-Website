const ReviewCard = ({ name, avatar, company, review }) => {
    return (
      <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6 max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* User info */}
        <div className="flex items-center space-x-3 sm:space-x-4 mb-3">
          <img
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-red-300 shadow-md"
            src={avatar}
            alt={`${name}'s Avatar`}
          />
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900">{name}</h4>
          </div>
        </div>
  
        {/* Review content */}
        <p className="text-gray-700 text-sm sm:text-md font-medium italic mb-6 leading-relaxed">
          “{review}”
        </p>
      </div>
    );
  };
  