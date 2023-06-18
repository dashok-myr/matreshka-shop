export interface ICategory {
  title: string;
  mainImg: string;
  items: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  discount: number | null;
  description: string;
  images: string[];
}

export interface ICartItem extends IProduct {
  amount: number;
}
