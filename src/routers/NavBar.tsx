import { Link, Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";
import { signOutUser } from "../../utils/firebase";
import { useContext } from "react";
import { UserContext } from "../context/user.context";

export default function NavBar() {
  const { user } = useContext(UserContext);

  const { pathname } = useLocation();

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 w-full border-b border-gray-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Logo"
            />
          </Link>
          <div className="items-center justify-between">
            <ul className="flex p-4 md:mt-4">
              <li>
                <Link
                  to="/"
                  className={classNames("py-2 pl-3 pr-4 hover:text-gray-500", {
                    "text-blue-700": pathname === "/",
                    "text-gray-900": pathname !== "/",
                  })}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={classNames(
                    "py-2 pl-3 pr-4 hover:text-gray-400 rounded md:bg-transparent",
                    {
                      "text-blue-700": pathname === "/contact",
                      "text-gray-900": pathname !== "/contact",
                    }
                  )}
                >
                  Contact
                </Link>
              </li>
              <li>
                {user?.email ? (
                  <a
                    href="/"
                    className="py-2 pl-3 pr-4 hover:text-gray-400"
                    onClick={() => {
                      signOutUser();
                    }}
                  >
                    Sign Out
                  </a>
                ) : (
                  <Link
                    to="/signin"
                    className={classNames(
                      "py-2 pl-3 pr-4 hover:text-gray-400",
                      {
                        "text-blue-700": pathname === "/signin",
                        "text-gray-900": pathname !== "/signin",
                      }
                    )}
                  >
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
