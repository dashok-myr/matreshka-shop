import { getCategory } from "../ShopItems";
import { useParams } from "react-router-dom";
import AddButton from "./shared/AddButton";
import clsx from "clsx";
import ShopItemInfo from "./shared/ShopItemtInfo";
import IncrementDecreaseButtons from "./shared/IncrementDecreaseButtons";
import { useContext, useState } from "react";
import { CartItemsContext } from "../../context/cartItems.context";
import Price from "./shared/Price";

interface ShopItemDesktopProps {
  itemId: string | string[];
}

export default function ShopItemDesktop({ itemId }: ShopItemDesktopProps) {
  const [amount, setAmount] = useState<number>(1);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const { collection } = useParams();
  const { addCartItems } = useContext(CartItemsContext);

  const category = getCategory(collection);
  if (!category) return null;

  const shopItem = category.items.find((item) => {
    return item.id.toString().toLowerCase() === itemId;
  });

  if (!shopItem) return null;

  return (
    <div className="flex justify-center items-center max-w-[70%] h-full m-auto">
      <div className="flex justify-between">
        <div className="flex flex-col flex-1 border-orange">
          <div className="flex flex-col w-96">
            <img
              className="rounded-2xl w-96 h-96 object-cover object-top"
              src={shopItem.images[activeProductIndex]}
              alt="product"
            />
            <div className="flex justify-between pt-6">
              {shopItem.images.map((image, imageIndex) => {
                return (
                  <div
                    key={`${shopItem.id}-${imageIndex}}`}
                    className={clsx(
                      {
                        "ring-2 ring-orange": activeProductIndex === imageIndex,
                      },
                      "rounded-xl"
                    )}
                  >
                    <button
                      className={clsx({
                        "opacity-30": activeProductIndex === imageIndex,
                      })}
                      key={imageIndex}
                      onClick={() => {
                        setActiveProductIndex(imageIndex);
                      }}
                    >
                      <img
                        className="rounded-xl max-w-full w-20 h-20 object-cover object-right"
                        src={image}
                        alt="product"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-0 flex flex-col flex-1 self-center max-h-96">
          <ShopItemInfo product={shopItem} collection="SNEAKERS COMPANY" />
          <Price shopItem={shopItem} />
          <div className="flex py-6">
            <IncrementDecreaseButtons
              onDecrease={() => setAmount(amount - 1)}
              onIncrement={() => setAmount(amount + 1)}
              amount={amount}
            />
            <AddButton
              onClick={() => {
                addCartItems(shopItem, amount);
                setAmount(1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
