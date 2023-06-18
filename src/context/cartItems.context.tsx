import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";
import { ICartItem, IProduct } from "../types/IProduct";
import getPriceAfterDiscount from "../utils/getPriceAfterDiscount";

export const CartItemsContext = createContext<{
  cartItems: ICartItem[];
  increaseItemsAmount: (cartItem: ICartItem) => void;
  decreaseItemsAmount: (cartItem: ICartItem) => void;
  setCartItems: Dispatch<SetStateAction<ICartItem[]>>;
  addCartItems: (product: IProduct, amount: number) => void;
  removeCartItem: (cartItem: ICartItem) => void;
  totalPrice: number;
}>({
  cartItems: [],
  setCartItems: () => {},
  increaseItemsAmount: () => {
    return;
  },
  decreaseItemsAmount: () => {
    return;
  },
  addCartItems: () => {
    return;
  },
  removeCartItem: () => {
    return;
  },
  totalPrice: 0,
});

export const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addCartItems = (shopItem: IProduct, amount: number) => {
    const cartItemIndex = cartItems.findIndex((item) => {
      return item.id === shopItem.id;
    });

    if (cartItemIndex === -1) {
      setCartItems([...cartItems, { ...shopItem, amount: amount }]);
      return;
    }

    const cartItem = {
      ...cartItems[cartItemIndex],
      amount: cartItems[cartItemIndex].amount + amount,
    };

    const copy = [...cartItems];
    copy[cartItemIndex] = cartItem;

    setCartItems(copy);
  };

  const increaseItemsAmount = (cartItem: ICartItem) => {
    const cartItemIndex = cartItems.findIndex((item) => {
      return item.id === cartItem.id;
    });

    const foundCartItem = { ...cartItems[cartItemIndex] };

    foundCartItem.amount += 1;
    const copy = [...cartItems];
    copy[cartItemIndex] = foundCartItem;

    setCartItems(copy);
  };

  const decreaseItemsAmount = (cartItem: ICartItem) => {
    const cartItemIndex = cartItems.findIndex((item) => {
      return item.id === cartItem.id;
    });

    const foundCartItem = { ...cartItems[cartItemIndex] };
    if (foundCartItem.amount === 1) {
      setCartItems(
        cartItems.filter((item) => {
          return item.id !== cartItem.id;
        })
      );
      return;
    }

    foundCartItem.amount -= 1;
    const copy = [...cartItems];
    copy[cartItemIndex] = foundCartItem;
    setCartItems(copy);
  };

  const removeCartItem = (cartItem: ICartItem) => {
    const cartItemsAfterRemoval = cartItems.filter((item) => {
      return item.id !== cartItem.id;
    });
    setCartItems(cartItemsAfterRemoval);
  };

  const totalPrice = useMemo(() => {
    let sum = 0;

    for (const item of cartItems) {
      sum += +getPriceAfterDiscount(item) * item.amount;
    }
    return Number(sum.toFixed(2));
  }, [cartItems]);

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        setCartItems,
        addCartItems,
        increaseItemsAmount,
        decreaseItemsAmount,
        removeCartItem,
        totalPrice,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};
