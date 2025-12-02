export default function ServiceCard({ provider }) {
  return (
    <div className="bg-gray-800 text-gray-100 rounded-lg shadow-md p-5 hover:shadow-[0_0_15px_#10b981] transform hover:-translate-y-1 transition-all">
      <h2 className="text-xl font-bold mb-2">{provider.name}</h2>
      <p className="text-gray-300">{provider.serviceType}</p>
      <p className="text-gray-300">₹ {provider.price}</p>
      <p className="text-yellow-400">⭐ {provider.rating}</p>
    </div>
  );
}
