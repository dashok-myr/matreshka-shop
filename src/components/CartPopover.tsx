import trashIcon from "../icons/icon-delete.svg";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { CartItemsContext } from "../context/cartItems.context";
import { useNavigate } from "react-router-dom";
import getPriceAfterDiscount from "../utils/getPriceAfterDiscount";

interface CartPopoverProps {
  isPopoverOpen: boolean;
  setIsPopoverOpen: Dispatch<SetStateAction<boolean>>;
}
export default function CartPopover({
  isPopoverOpen,
  setIsPopoverOpen,
}: CartPopoverProps) {
  const { cartItems, removeCartItem } = useContext(CartItemsContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="font-semibold text-lg">Cart</div>
      <span className="hidden sm:block h-0.5 w-full bg-gray-200"></span>
      <div className="flex flex-col gap-2">
        {cartItems
          .filter((_, index) => index < 2)
          .map((cartItem) => {
            return (
              <div key={cartItem.id} className="flex items-center gap-3">
                <img
                  src={cartItem.images[0]}
                  alt="product"
                  className="w-16 h-16 rounded-lg"
                />
                <div className="flex justify-between w-full">
                  <div className="flex flex-col text-base">
                    <div className="text-grayish-blue">{cartItem.name}</div>
                    <div className="flex">
                      <div className="text-grayish-blue">
                        ${getPriceAfterDiscount(cartItem)}
                      </div>
                      <span className="text-grayish-blue px-1">x</span>
                      <div className="text-grayish-blue">{cartItem.amount}</div>
                      <div className="font-semibold pl-1">
                        $
                        {(
                          +getPriceAfterDiscount(cartItem) * cartItem.amount
                        ).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <button onClick={() => removeCartItem(cartItem)}>
                    <img src={trashIcon} alt="cartIcon" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex justify-center items-start">
        <button
          onClick={() => {
            setIsPopoverOpen(!isPopoverOpen);
            navigate("/checkout");
          }}
          className="focus:outline-none text-white text-base w-full py-2 bg-orange rounded-lg active:ring-4 active:ring-red-300"
        >
          <span className="font-semibold">Checkout</span>
        </button>
      </div>
    </>
  );
}
