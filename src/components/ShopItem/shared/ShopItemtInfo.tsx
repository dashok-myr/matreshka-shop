import { IProduct } from "../../../types/IProduct";

interface PriceProps {
  collection: string;
  product: IProduct;
}
export default function ShopItemInfo({ collection, product }: PriceProps) {
  return (
    <>
      <div className="pb-4 text-orange font-bold">{collection}</div>
      <div className="pb-4 text-3xl font-semibold ">{product.name}</div>
      <div className="pb-4 text-grayish-blue">{product.description}</div>
    </>
  );
}
