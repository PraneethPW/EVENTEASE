import { useEffect, useState } from "react";
import API from "../api/api";
import ProviderCard from "../components/ProviderCard";

export default function Providers() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    API.get("/api/providers")
      .then((res) => setProviders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Providers</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {providers.map((p) => (
          <ProviderCard key={p._id} provider={p} />
        ))}
      </div>
    </div>
  );
}
