function ProfileCard() {
  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform hover:scale-105 transition duration-300 ease-in-out">
      {/* Header with Gradient */}
      <div className="h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <h1 className="text-white text-lg font-bold tracking-wide">Team Member</h1>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center -mt-12">
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="Jane Doe"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* Name & Role */}
      <div className="text-center mt-4 px-6">
        <h2 className="text-2xl font-semibold text-gray-800">Jane Doe</h2>
        <p className="text-gray-500 text-sm">Frontend Developer</p>
      </div>

      {/* Bio */}
      <div className="px-6 mt-4 text-center">
        <p className="text-gray-600 text-sm leading-relaxed">
          Passionate about building responsive web apps and crafting clean UI
          with React and Tailwind CSS. Skilled in creating engaging user experiences.
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-6 mb-6">
        <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-blue-500 transition duration-300 shadow-lg">
          Connect
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
