function Card({ image, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto my-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition">
        Learn More
      </button>
    </div>
  );
}

export default Card;
