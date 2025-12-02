import { useEffect, useState } from "react";
import API from "../api/api";
import ProviderCard from "../components/ProviderCard";

export default function Providers() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    API.get("/api/providers")
      .then((res) => setProviders(res.data))
      .catch(() => console.log("Error fetching providers"));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-white text-center">All Providers</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {providers.map((p) => (
          <ProviderCard key={p._id} provider={p} />
        ))}
      </div>
    </div>
  );
}
