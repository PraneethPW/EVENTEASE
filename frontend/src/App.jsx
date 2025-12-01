import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProviderDetails from "./pages/ProviderDetails";
import Providers from "./pages/Providers";
import RegisterProvider from "./pages/RegisterProvider";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/provider/:id" element={<ProviderDetails />} />
        <Route path="/register-provider" element={<RegisterProvider />} />
      </Routes>
    </BrowserRouter>
  );
}
