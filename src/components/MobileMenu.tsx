import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Closed from "../icons/icon-close.svg";
import Menu from "../icons/icon-menu.svg";
import { UserContext } from "../context/user.context";
import { SignInButton, SignOutButton } from "../pages/NavBar";
import Heart from "../icons/heart.png";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <>
      <button
        onClick={() => {
          setIsMenuOpen(true);
        }}
        type="button"
        className="inline-flex items-center px-2 pt-1 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <img src={Menu} alt="menu" />
      </button>

      {isMenuOpen && (
        <div className="relative">
          <div className="flex flex-col gap-8 block fixed top-0 left-0 w-1/2 h-full pl-6 overflow-y-auto py-8 bg-white z-10 font-semibold text-very-dark-blue">
            <div>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <img src={Closed} alt="menu" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/" className="block">
                Collection
              </Link>
              <Link to="/shop/mens" className="block">
                Men
              </Link>
              <Link to="/shop/womens" className="block">
                Women
              </Link>
              {user?.email && (
                <Link to="/savedItems" className="block flex items-center	">
                  Saved Items
                  <img alt="heat" src={Heart} className="w-3 h-3 ml-1 pt-0.5" />
                </Link>
              )}
              <span className="h-0.5 w-full bg-gray-200 mt-4"></span>
              {user?.email ? <SignOutButton /> : <SignInButton />}
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}
    </>
  );
}
