import { createContext, ReactNode } from "react";
import { IProduct } from "../types/IProduct";
import useStateWithLocalStorage from "../utils/useStateWithLocalStorage";

export const SavedItemsContext = createContext<{
  savedItems: IProduct[];
  setSavedItems: (value: IProduct[]) => void;
}>({
  savedItems: [],
  setSavedItems: () => {},
});

export const SavedItemsProvider = ({ children }: { children: ReactNode }) => {
  const [savedItems, setSavedItems] = useStateWithLocalStorage<IProduct[]>(
    "savedItems",
    []
  );

  return (
    <SavedItemsContext.Provider value={{ savedItems, setSavedItems }}>
      {children}
    </SavedItemsContext.Provider>
  );
};
