import trash from "../../icons/trash.png";
import { useContext } from "react";
import { SavedItemsContext } from "../../context/savedItems.context";
import { IProduct } from "../../types/IProduct";
import EmptySavedItems from "./EmptySavedItems";
import { CartItemsContext } from "../../context/cartItems.context";

export default function SavedItems() {
  const { addCartItems } = useContext(CartItemsContext);
  const { savedItems, setSavedItems } = useContext(SavedItemsContext);

  if (!savedItems.length) {
    return <EmptySavedItems />;
  }

  function removeSavedItem(savedItem: IProduct) {
    const foundIndex = savedItems.findIndex((savedItemOrg) => {
      return savedItemOrg.id === savedItem.id;
    });

    const filteredItem = savedItems.filter((_, index) => {
      return foundIndex !== index;
    });
    setSavedItems(filteredItem);
  }

  return (
    <div className="p-10">
      <div className="flex justify-center items-center text-4xl py-10">
        SAVED ITEMS
      </div>
      <div className="grid grid-rows-1 md:grid-cols-4 gap-6">
        {savedItems.map((savedItem) => {
          const { id, name, imageUrl, price } = savedItem;
          return (
            <div className="flex flex-col">
              <div
                key={id}
                className="group flex flex-col h-96 bg-cover bg-center bg-no-repeat justify-between"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              >
                <button
                  onClick={() => removeSavedItem(savedItem)}
                  className="self-end p-2 bg-gray-100 rounded-full m-1"
                >
                  <img className="pt-0.5 w-6 h-6" src={trash} alt="cart" />
                </button>
                <div className="mb-4 self-center">
                  <button
                    onClick={() => {
                      addCartItems(savedItem, 1);
                      setSavedItems(
                        savedItems.filter((item) => savedItem.id !== item.id)
                      );
                    }}
                    className="hidden group-hover:block opacity-70 bg-white border-2 border-black p-3"
                  >
                    <div className="flex justify-center text-center">
                      MOVE TO CART
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex justify-between pb-4 text-gray-500">
                <div>{name}</div>
                <div>${price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
