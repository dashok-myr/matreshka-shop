import getPriceAfterDiscount from "../../../utils/getPriceAfterDiscount";
import { IProduct } from "../../../types/IProduct";

interface PriceProps {
  shopItem: IProduct;
}
export default function Price({ shopItem }: PriceProps) {
  if (shopItem.discount) {
    return (
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="text-2xl font-semibold mr-4">
            ${getPriceAfterDiscount(shopItem)}
          </div>
          <div className="text-orange font-bold px-2 py-1 bg-pale-orange rounded-lg">
            {shopItem.discount}%
          </div>
        </div>
        <div className="text-sm text-grayish-blue line-through">
          ${shopItem.price}
        </div>
      </div>
    );
  }

  return <div className="text-2xl font-semibold">${shopItem.price}</div>;
}
