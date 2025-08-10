function UserProfile() {
  return (
    <div className="max-w-sm sm:max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 p-4 transform hover:scale-102 transition duration-300">
      {/* Header */}
      <div className="h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center rounded-t-md">
        <h3 className="text-white text-lg font-semibold tracking-wide">Team Member</h3>
      </div>

      {/* Image */}
      <div className="flex justify-center -mt-12">
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="User avatar"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
        />
      </div>

      {/* Content */}
      <div className="text-center mt-4 px-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800">Jane Doe</h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Passionate frontend developer focused on responsive UI, accessibility,
          and building delightful user experiences using React and Tailwind CSS.
        </p>

        {/* Action */}
        <div className="flex justify-center mt-4">
          <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 transition">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
