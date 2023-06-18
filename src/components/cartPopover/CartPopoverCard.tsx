import React, { Dispatch, SetStateAction, useContext } from "react";
import EmptyCartPopover from "./EmptyCartPopover";
import { CartItemsContext } from "../../context/cartItems.context";
import CartPopover from "../CartPopover";

interface CartPopoverCardProps {
  isPopoverOpen: boolean;
  setIsPopoverOpen: Dispatch<SetStateAction<boolean>>;
}
export default function CartPopoverCard({
  isPopoverOpen,
  setIsPopoverOpen,
}: CartPopoverCardProps) {
  const { cartItems } = useContext(CartItemsContext);

  return (
    <div className="w-72 h-full">
      <div className="flex flex-col gap-4 p-4 shadow-2xl rounded-lg">
        {!cartItems.length ? (
          <EmptyCartPopover />
        ) : (
          <CartPopover
            isPopoverOpen={isPopoverOpen}
            setIsPopoverOpen={setIsPopoverOpen}
          />
        )}
      </div>
    </div>
  );
}
