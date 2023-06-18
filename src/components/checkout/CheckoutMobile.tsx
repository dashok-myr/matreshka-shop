import React, { useContext } from "react";
import trashIcon from "../../icons/icon-delete.svg";
import { CartItemsContext } from "../../context/cartItems.context";
import getPriceAfterDiscount from "../../utils/getPriceAfterDiscount";

export default function CheckoutMobile() {
  const {
    cartItems,
    increaseItemsAmount,
    decreaseItemsAmount,
    removeCartItem,
    totalPrice,
  } = useContext(CartItemsContext);

  return (
    <div className="flex flex-col gap-8 p-8">
      {cartItems.map((cartItem) => {
        return (
          <div key={cartItem.id} className="flex gap-4 text-gray-500 text-xl">
            <div>
              <img
                className="w-40 h-40 object-cover object-top"
                src={cartItem.images[0]}
                alt="mama"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="font-semibold text-dark-grayish-blue">
                ${getPriceAfterDiscount(cartItem)}
              </div>
              <div>{cartItem.name}</div>
              <div>
                <button
                  onClick={() => decreaseItemsAmount(cartItem)}
                  className="font-bold pr-1"
                >{`<`}</button>
                {cartItem.amount}
                <button
                  onClick={() => increaseItemsAmount(cartItem)}
                  className="font-bold pl-1"
                >{`>`}</button>
              </div>
              <div className="flex self-end">
                <button onClick={() => removeCartItem(cartItem)}>
                  <img src={trashIcon} alt="cartIcon" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col self-end">
        <div className="py-6 text-xl">TOTAL: ${totalPrice}</div>
      </div>
    </div>
  );
}
