import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./pages/NavBar";
import ShopItemId from "./pages/ShopItemId";
import ShopDesktop from "./components/shop/ShopDesktop";
import SignIn from "./components/Sign-in";
import ShopItems from "./components/ShopItems";
import SignUpForm from "./components/SignUpForm";
import React, { useContext, useEffect } from "react";
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase";
import { IUser, UserContext } from "./context/user.context";
import { CartItemsProvider } from "./context/cartItems.context";
import { SavedItemsProvider } from "./context/savedItems.context";
import SavedItems from "./components/savedItems/SavedItems";
import Checkout from "./pages/Checkout";

function App() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    return onAuthStateChangedListener((user: IUser | null) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setUser(user);
    });
  }, []);

  return (
    <CartItemsProvider>
      <SavedItemsProvider>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<ShopDesktop />} />
            <Route path="shop/:collection" element={<ShopItems />} />
            <Route
              path="shop/:collection/item/:itemId"
              element={<ShopItemId />}
            />
            <Route path="savedItems" element={<SavedItems />} />
            <Route path="checkout" element={<Checkout />} />
            <Route
              path="signin"
              element={
                <SignIn
                  onSignInSuccess={() => {
                    navigate("/");
                  }}
                />
              }
            />
            <Route
              path="signup"
              element={
                <SignUpForm
                  onSignUpSuccess={() => {
                    navigate("/");
                  }}
                />
              }
            />
          </Route>
        </Routes>
      </SavedItemsProvider>
    </CartItemsProvider>
  );
}

export default App;
