import { useState } from "react";
import API from "../api/api";

export default function RegisterProvider() {
  const [form, setForm] = useState({
    name: "",
    serviceType: "",
    price: "",
    location: "",
    phone: "",
    description: "",
    rating: "", // new rating field
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/providers/register", {
        ...form,
        price: Number(form.price),
        rating: form.rating ? Number(form.rating) : 0, // default 0 if empty
      });
      alert("Registered Successfully!");
      setForm({
        name: "",
        serviceType: "",
        price: "",
        location: "",
        phone: "",
        description: "",
        rating: "",
      });
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-lg w-full max-w-md hover:shadow-[0_0_20px_#10b981] transition-all">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">Register as Provider</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {["name", "serviceType", "price", "location", "phone"].map((field) => (
            <input
              key={field}
              type={field === "price" ? "number" : "text"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          ))}

          {/* Rating Input */}
          <input
            type="number"
            min="0"
            max="5"
            step="0.1"
            placeholder="Rating (0-5)"
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
            className="p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[100px]"
          />

          <button className="bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-[0_0_15px_#10b981]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
