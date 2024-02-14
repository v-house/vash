import { Link } from "react-router-dom";

const GuestNavbar = () => {
  return (
    <nav className="bg-white p-4 border-b-2">
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <div className="mb-4 lg:mb-0">
          <Link to={"/"}>
            <img src="/full_logo.png" alt="Logo" className="h-24" />
          </Link>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-bold">Need Assistance?</p>
          <button className="text-logoGreen font-bold">
            <Link to="/authentication">Contact our Customer Service</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default GuestNavbar;
