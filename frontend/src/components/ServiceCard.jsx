export default function ServiceCard({ provider }) {
    return (
      <div className="border rounded p-4 shadow">
        <h2 className="text-xl font-bold">{provider.name}</h2>
        <p>{provider.serviceType}</p>
        <p>₹ {provider.price}</p>
        <p>⭐ {provider.rating}</p>
      </div>
    );
  }
  