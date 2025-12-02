import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

export default function ProviderDetails() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [booking, setBooking] = useState({ userName: "", userPhone: "", eventDate: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    API.get(`/providers/${id}`).then((res) => setProvider(res.data));
  }, [id]);

  const handleBooking = async () => {
    if (!booking.userName || !booking.userPhone || !booking.eventDate) {
      alert("Please fill all fields!");
      return;
    }

    try {
      setLoading(true);
      await API.post("/bookings/book", { ...booking, providerId: id, status: "pending" });
      alert("Booking Successful!");
      setBooking({ userName: "", userPhone: "", eventDate: "" });
    } catch (err) {
      console.error(err);
      alert("Booking Failed!");
    } finally {
      setLoading(false);
    }
  };

  if (!provider) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <h2 className="text-xl">Loading...</h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Provider Info */}
        <div className="bg-gray-800 text-gray-100 rounded-xl shadow-md p-6 hover:shadow-[0_0_20px_#3b82f6] transition-all">
          <h1 className="text-2xl font-bold mb-4">{provider.name}</h1>
          <p className="mb-2"><strong>Service Type:</strong> {provider.serviceType}</p>
          <p className="mb-2"><strong>Price:</strong> ₹ {provider.price}</p>
          <p className="mb-2"><strong>Location:</strong> {provider.location}</p>
          <p className="mb-2"><strong>Phone:</strong> {provider.phone}</p>
          <p className="mt-3 font-semibold text-yellow-400">⭐ Rating: {provider.rating || "N/A"}</p>
          {provider.description && <p className="mt-4">{provider.description}</p>}
        </div>

        {/* Booking Box */}
        <div className="bg-gray-800 text-gray-100 rounded-xl shadow-md p-6 hover:shadow-[0_0_20px_#10b981] transition-all">
          <h2 className="text-xl font-bold mb-4">Book This Service</h2>
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              handleBooking();
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={booking.userName}
              onChange={(e) => setBooking({ ...booking, userName: e.target.value })}
              className="p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={booking.userPhone}
              onChange={(e) => setBooking({ ...booking, userPhone: e.target.value })}
              className="p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="date"
              value={booking.eventDate}
              onChange={(e) => setBooking({ ...booking, eventDate: e.target.value })}
              className="p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-[0_0_15px_#3b82f6]"
            >
              {loading ? "Booking..." : "Book Now"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
