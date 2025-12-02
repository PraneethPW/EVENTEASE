import { Link } from "react-router-dom";

export default function ProviderCard({ provider }) {
  return (
    <div className="bg-gray-800 text-gray-100 rounded-xl shadow-md hover:shadow-[0_0_15px_#3b82f6] transform hover:-translate-y-1 transition-all p-5 flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-2">{provider.name}</h2>
      <p className="text-gray-300 mb-1"><strong>Service:</strong> {provider.serviceType}</p>
      <p className="text-gray-300 mb-1"><strong>Price:</strong> ₹{provider.price}</p>
      <p className="text-gray-300 mb-1"><strong>Location:</strong> {provider.location}</p>
      <p className="text-yellow-400 font-medium mb-3">⭐ <strong>Rating:</strong> {provider.rating || "Not Rated"}</p>

      <Link
        to={`/providers/${provider._id}`}
        className="bg-blue-600 hover:bg-blue-500 text-white rounded-md py-2 text-center font-medium transition-colors"
      >
        View Details
      </Link>
    </div>
  );
}
