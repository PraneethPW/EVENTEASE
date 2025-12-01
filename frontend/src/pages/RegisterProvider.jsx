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
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/providers/register", {
        ...form,
        price: Number(form.price),
      });
      alert("Registered Successfully!");
      setForm({
        name: "",
        serviceType: "",
        price: "",
        location: "",
        phone: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  const inputStyle = {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #d1d5db",
    marginBottom: "8px",
  };

  return (
    <div style={{ maxWidth: "600px", margin: "24px auto" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>
        Register as Service Provider
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          style={inputStyle}
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="Service Type"
          value={form.serviceType}
          onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
        />

        <input
          style={inputStyle}
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          style={{ ...inputStyle, minHeight: "80px" }}
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button
          type="submit"
          style={{
            marginTop: "8px",
            padding: "10px 16px",
            backgroundColor: "#16a34a",
            color: "white",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
