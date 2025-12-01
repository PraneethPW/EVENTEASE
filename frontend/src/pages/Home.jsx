import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center max-w-5xl mx-auto px-6 py-28 text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-text">
          EventEase
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Discover trusted service providers for your events and book hassle-free. Weddings, parties, corporate events — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <Link
            to="/providers"
            className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-xl font-semibold transition-all shadow-md hover:shadow-[0_0_20px_#3b82f6]"
          >
            Explore Providers
          </Link>
          <Link
            to="/register-provider"
            className="bg-green-600 hover:bg-green-500 text-white py-3 px-8 rounded-xl font-semibold transition-all shadow-md hover:shadow-[0_0_20px_#10b981]"
          >
            Become a Provider
          </Link>
        </div>
      </section>

      {/* Features / Directions Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Feature Card 1 */}
        <div className="bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-[0_0_15px_#3b82f6] transition-all">
          <h3 className="text-xl font-bold mb-2">Browse Providers</h3>
          <p className="text-gray-300 mb-4">Find trusted service providers with detailed ratings and reviews.</p>
          <Link to="/providers" className="text-blue-400 font-semibold hover:underline">Explore Now →</Link>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-[0_0_15px_#10b981] transition-all">
          <h3 className="text-xl font-bold mb-2">Register as Provider</h3>
          <p className="text-gray-300 mb-4">Offer your services and get booked by customers easily.</p>
          <Link to="/register-provider" className="text-green-400 font-semibold hover:underline">Register Now →</Link>
        </div>

        {/* Feature Card 3 */}
        <Link
          to="/providers"
          className="block bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-[0_0_15px_#facc15] transition-all"
        >
          <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
          <p className="text-gray-300 mb-4">Select, schedule, and confirm your bookings seamlessly.</p>
          <span className="text-yellow-400 font-semibold">Start Booking →</span>
        </Link>

      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} EventEase. All rights reserved.
      </footer>
    </div>
  );
}
