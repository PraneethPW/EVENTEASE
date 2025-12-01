import { useEffect, useState } from "react";
import API from "../api/api";
import ProviderCard from "../components/ProviderCard";

export default function Home() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    API.get("/providers")
      .then((res) => setProviders(res.data))
      .catch(() => console.log("Error fetching providers"));
  }, []);

  return (
    <div className="page-container">
      <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>
        Available Service Providers
      </h1>

      <div className="grid">
        {providers.map((p) => (
          <ProviderCard key={p._id} provider={p} />
        ))}
      </div>
    </div>
  );
}
