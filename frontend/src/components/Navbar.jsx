import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#111827", padding: "12px 0", color: "white" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "20px" }}>
          EventEase
        </Link>

        <div>
          <Link
            to="/"
            style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
          >
            Home
          </Link>

          <Link
            to="/providers"
            style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
          >
            Providers
          </Link>

          <Link
            to="/register-provider"
            style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
          >
            Register
          </Link>

          {/* <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20need%20a%20service"
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
          >
            Contact
          </a> */}
        </div>
      </div>
    </nav>
  );
}
