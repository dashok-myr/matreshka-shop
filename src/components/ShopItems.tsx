import { SHOP_DATA } from "../shop-data";
import { useNavigate, useParams } from "react-router-dom";
import heart from "../icons/heart.png";
import { useContext } from "react";
import { SavedItemsContext } from "../context/savedItems.context";

export function getCategory(collection: string | undefined) {
  return SHOP_DATA.find((category) => {
    return category.title.toLowerCase() === collection;
  });
}

export default function ShopItems() {
  const { savedItems, setSavedItems } = useContext(SavedItemsContext);
  const { collection } = useParams();
  const navigate = useNavigate();

  const category = getCategory(collection);
  if (!category) return null;

  return (
    <div className="p-10">
      <div className="flex justify-center item-center text-4xl pb-5 md:py-10 text-orange">
        {collection?.toUpperCase()}
      </div>
      <div className="grid grid-rows-1 md:grid-cols-4 gap-6">
        {category.items.map((item) => {
          const { id, name, imageUrl, price } = item;
          const isSaved = savedItems.find((el) => el.id === item.id);

          return (
            <div className="flex flex-col">
              <div
                key={id}
                className="group flex flex-col h-96 bg-cover bg-center bg-no-repeat justify-between"
                style={{ backgroundImage: `url('${imageUrl}')` }}
              >
                <button
                  onClick={() => {
                    if (isSaved) {
                      setSavedItems(
                        savedItems.filter(
                          (savedItem) => savedItem.id !== item.id
                        )
                      );
                    } else {
                      setSavedItems([...savedItems, item]);
                    }
                  }}
                  className={`self-end p-2 bg-gray-100 rounded-full m-1 ${
                    isSaved ? "bg-gradient-to-r from-pink-500 to-blue-500" : ""
                  }`}
                >
                  <img className="pt-0.5 w-6 h-6" src={heart} alt="cart" />
                </button>
                <div className="mb-4 self-center">
                  <button
                    onClick={() =>
                      navigate(`/shop/${collection}/item/${item.id}`)
                    }
                    className="hidden group-hover:block opacity-70 bg-white border-2 border-black p-3"
                  >
                    <div className="flex justify-center text-center">
                      SEE ITEM
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex justify-between pb-4 text-gray-500">
                <div>{name}</div>
                <div className="text-orange">$ {price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
