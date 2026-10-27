import { Outlet } from "react-router";
import Navbar from "../components/store/Navbar";
import Footer from "../components/store/Footer";


export default function StoreLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}