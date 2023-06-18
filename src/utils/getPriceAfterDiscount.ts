import { IProduct } from "../types/IProduct";

export default function getPriceAfterDiscount(product: IProduct) {
  if (!product.discount) return product.price;

  const percent = product.discount / 100;
  const discountedPrice = product.price - product.price * percent;
  return Number(discountedPrice.toFixed(2));
}
