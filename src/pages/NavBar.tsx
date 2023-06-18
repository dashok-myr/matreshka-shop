import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Cart from "../icons/icon-cart.svg";
import Heart from "../icons/heart.png";
import Matreshka from "../icons/matryoshka-doll.png";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";

import useIsMobile from "../utils/useIsMobile";
import { ICartItem } from "../types/IProduct";
import { CartItemsContext } from "../context/cartItems.context";
import CartPopoverCard from "../components/cartPopover/CartPopoverCard";
import MobileMenu from "../components/MobileMenu";
import { signOutUser } from "../utils/firebase/firebase";
import { UserContext } from "../context/user.context";
import { SavedItemsContext } from "../context/savedItems.context";

export function SignOutButton() {
  const { setSavedItems } = useContext(SavedItemsContext);
  const { user } = useContext(UserContext);

  return (
    <Link
      to="/"
      className="w-20 text-grayish-blue"
      onClick={() => {
        signOutUser();
        setSavedItems([]);
      }}
    >
      Sign Out
    </Link>
  );
}
export function SignInButton() {
  return (
    <Link to="/signin" className="w-20 text-grayish-blue">
      Sign In
    </Link>
  );
}

function getTotalAmountOfCartItems(cartItems: ICartItem[]) {
  return cartItems.reduce((accu, nextCartItem) => {
    return accu + nextCartItem.amount;
  }, 0);
}

export default function Navbar() {
  const { cartItems } = useContext(CartItemsContext);
  const { user } = useContext(UserContext);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <div className="flex flex-col w-full md:m-auto px-4 pt-4 md:p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {isMobile && <MobileMenu />}
            <img className="w-5 h-5" src={Matreshka} alt="Rounded avatar" />
            <div className="text-orange font-bold text-xl md:text-2xl">
              MATRESHKA
            </div>
          </div>
          <div className="hidden md:flex md:flex-row justify-start w-full text-grayish-blue pl-12">
            <Link to="/" className="py-2 pr-8 block">
              Collection
            </Link>
            <Link to="/shop/mens" className="py-2 pr-8 block">
              Men
            </Link>
            <Link to="/shop/womens" className="py-2 pr-8 block">
              Women
            </Link>
            {user?.email && (
              <Link
                to="/savedItems"
                className="py-2 pr-8 block flex items-center justify-center"
              >
                Saved Items
                <img alt="heat" src={Heart} className="w-3 h-3 ml-1 pt-0.5" />
              </Link>
            )}
          </div>
          {!isMobile && (user?.email ? <SignOutButton /> : <SignInButton />)}
          <div className="flex justify-center items-center pl-5">
            <Popover
              placement="bottom-end"
              open={isPopoverOpen}
              handler={() => {
                setIsPopoverOpen(!isPopoverOpen);
              }}
            >
              <PopoverHandler>
                <button className="relative">
                  {cartItems.length > 0 && (
                    <div className="absolute rounded-full bg-orange w-4 h-4 top-2 left-4 text-white text-xs">
                      {getTotalAmountOfCartItems(cartItems)}
                    </div>
                  )}
                  <img
                    className="w-16 h-12 object-none pr-6"
                    src={Cart}
                    alt="cartIcon"
                  />
                </button>
              </PopoverHandler>
              <PopoverContent>
                <CartPopoverCard
                  isPopoverOpen={isPopoverOpen}
                  setIsPopoverOpen={setIsPopoverOpen}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <span className="h-0.5 w-full bg-gray-200 mt-4"></span>
      </div>
      <Outlet />
    </>
  );
}
