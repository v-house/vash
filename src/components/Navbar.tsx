import { useState } from "react";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="bg-gray-200 px-2">
      <div className="flex items-center justify-between space-x-2">
        <img src="/full_logo.png" alt="vash" className="h-14" />
        <div className="flex space-x-8">
          <button
            className="text-gray-700"
            onClick={() => setLoggedIn(!loggedIn)}
          >
            <div className="flex items-center">
              <CartLogo />
              <span className="absolute translate-x-6 -translate-y-3 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-green-600 ring-1 ring-inset ring-gray-500/10 bg-opacity-50">
                12
              </span>
            </div>
          </button>
          {loggedIn ? (
            <button className="text-white bg-green-600 px-4 py-2 font-bold">
              Sign In
            </button>
          ) : (
            <button className="text-gray-700 flex items-center space-x-2">
              <ProfileLogo />
              <div className="font-semibold">K Vivek Kumar</div>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const ProfileLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

const CartLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
};
