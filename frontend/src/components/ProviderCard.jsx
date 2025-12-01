import { Link } from "react-router-dom";

export default function ProviderCard({ provider }) {
  return (
    <div className="card">
      <h2 className="card-title">{provider.name}</h2>

      <p className="card-text">
        <strong>Service:</strong> {provider.serviceType}
      </p>
      <p className="card-text">
        <strong>Price:</strong> ₹{provider.price}
      </p>
      <p className="card-text">
        <strong>Location:</strong> {provider.location}
      </p>
      <p className="card-text">
        ⭐ <strong>Rating:</strong> {provider.rating || "Not Rated"}
      </p>

      <Link
        to={`/provider/${provider._id}`}
        className="btn-primary"
        style={{ marginTop: "8px", display: "inline-block" }}
      >
        View Details
      </Link>
    </div>
  );
}
