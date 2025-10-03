import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex flex-1 mt-2">

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
          <Outlet/>
        </main>
      </div>
      <Footer />
    </div>
  );
}
