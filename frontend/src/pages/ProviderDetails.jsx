import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

export default function ProviderDetails() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [booking, setBooking] = useState({
    userName: "",
    userPhone: "",
    eventDate: "",
  });

  useEffect(() => {
    API.get(`/providers/${id}`).then((res) => setProvider(res.data));
  }, [id]);

  const handleBooking = async () => {
    try {
      await API.post("/bookings/book", {
        ...booking,
        providerId: id,
        status: "pending",
      });

      alert("Booking Successful!");
      setBooking({ userName: "", userPhone: "", eventDate: "" });
    } catch (err) {
      console.error(err);
      alert("Booking Failed!");
    }
  };

  if (!provider) {
    return (
      <h2 style={{ maxWidth: "1200px", margin: "24px auto" }}>Loading...</h2>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "24px auto",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "24px",
      }}
    >
      {/* Provider info */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "white",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "8px" }}>
          {provider.name}
        </h1>

        <p>
          <strong>Service Type:</strong> {provider.serviceType}
        </p>
        <p>
          <strong>Price:</strong> ₹ {provider.price}
        </p>
        <p>
          <strong>Location:</strong> {provider.location}
        </p>
        <p>
          <strong>Phone:</strong> {provider.phone}
        </p>

        <p style={{ marginTop: "8px", fontWeight: "bold" }}>
          ⭐ Rating: {provider.rating ? provider.rating : "N/A"}
        </p>

        {provider.description && (
          <p style={{ marginTop: "15px" }}>
            <strong>About:</strong> {provider.description}
          </p>
        )}
      </div>

      {/* Booking box */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
          Book This Service
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleBooking();
          }}
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={booking.userName}
            onChange={(e) =>
              setBooking({ ...booking, userName: e.target.value })
            }
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #d1d5db" }}
          />

          <input
            type="tel"
            placeholder="Your Phone Number"
            value={booking.userPhone}
            onChange={(e) =>
              setBooking({ ...booking, userPhone: e.target.value })
            }
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #d1d5db" }}
          />

          <input
            type="date"
            value={booking.eventDate}
            onChange={(e) =>
              setBooking({ ...booking, eventDate: e.target.value })
            }
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #d1d5db" }}
          />

          <button
            type="submit"
            style={{
              marginTop: "8px",
              padding: "10px 16px",
              backgroundColor: "#2563eb",
              color: "white",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
