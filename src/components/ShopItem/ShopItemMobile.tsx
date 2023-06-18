import { getCategory } from "../ShopItems";
import { useParams } from "react-router-dom";
import AddButton from "./shared/AddButton";
import { useContext, useState } from "react";
import { CartItemsContext } from "../../context/cartItems.context";
import IncrementDecreaseButtons from "./shared/IncrementDecreaseButtons";
import ShopItemInfo from "./shared/ShopItemtInfo";
import MyCarousel from "../Carousel";
import Price from "./shared/Price";

interface ShopItemMobileProps {
  itemId: string | string[];
}

export default function ShopItemMobile({ itemId }: ShopItemMobileProps) {
  const [amount, setAmount] = useState<number>(1);
  const { collection } = useParams();
  const { addCartItems } = useContext(CartItemsContext);

  const category = getCategory(collection);
  if (!category) return null;

  const shopItem = category.items.find((item) => {
    return item.id.toString().toLowerCase() === itemId;
  });

  if (!shopItem) return null;

  return (
    <div className="flex justify-center items-center w-full h-full mx-0 ">
      <div className="flex flex-col justify-between">
        <MyCarousel
          images={shopItem.images}
          showStatus={false}
          showThumbs={false}
        />
        <div className="flex flex-col flex-1 self-center max-h-96 p-6">
          <ShopItemInfo product={shopItem} collection="SNEAKERS COMPANY" />
          <Price shopItem={shopItem} />
          <div className="flex flex-col py-6">
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
