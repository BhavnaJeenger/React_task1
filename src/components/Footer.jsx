import { FaCopyright } from "react-icons/fa";
import logo from "../assets/images/logo1.png";

export default function FooterLeft() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Logo & Copyright - Visible on larger screens */}
          <div className="w-36 hidden sm:flex flex-col">
            <a href="#">
              <img src={logo} alt="PolyTread Logo" />
            </a>
            <span className="flex gap-1 text-sm mt-1">
              PolyTread <FaCopyright /> 2025
            </span>
          </div>

          {/* Only Copyright - Visible on small screens */}
          <span className="flex gap-1 text-sm mt-1 block sm:hidden">
            PolyTread <FaCopyright /> 2025
          </span>
        </div>
      </div>
    </div>
  );
}
