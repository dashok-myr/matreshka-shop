import { useContext } from "react";
import { CartItemsContext } from "../../context/cartItems.context";

export default function CheckoutDesktop() {
  const {
    cartItems,
    increaseItemsAmount,
    decreaseItemsAmount,
    removeCartItem,
    totalPrice,
  } = useContext(CartItemsContext);

  return (
    <div className="h-screen mx-auto flex flex-col justify-center items-center h-96 w-2/4">
      <div className="flex flex-col overflow-y-auto h-96">
        <div className="grid grid-cols-5 gap-4 items-center text-gray-500 border-b-2 pb-2 text-sm">
          <div>Product</div>
          <div>Description</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Remove</div>
        </div>
        {cartItems.map((cartItem) => {
          return (
            <div className="grid grid-cols-5 gap-4 items-center text-gray-500 py-6 border-b-2">
              <div>
                <img src={cartItem.imageUrl} alt="mama" />
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
              <div>{cartItem.price}</div>
              <button onClick={() => removeCartItem(cartItem)}>X</button>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col self-end">
        <div className="py-6 text-xl">TOTAL: ${totalPrice}</div>
        <div>Pay Button</div>
      </div>
    </div>
  );
}
