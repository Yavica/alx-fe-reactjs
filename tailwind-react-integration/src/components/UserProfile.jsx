function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 mx-auto my-20 max-w-xs md:max-w-sm sm:p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="User avatar"
            className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full border-4 border-white shadow-md object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Heading */}
        <h2 className="text-lg md:text-xl text-blue-800 my-4 font-bold text-center hover:text-blue-500 transition-colors duration-300 ease-in-out cursor-pointer">
          Jane Doe
        </h2>

        {/* Paragraph */}
        <p className="text-sm md:text-base text-gray-600 text-center">
          Passionate frontend developer focused on responsive UI, accessibility,
          and building delightful user experiences using React and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
