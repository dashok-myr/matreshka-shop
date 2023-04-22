import {Route, Routes, useNavigate} from "react-router-dom";
import NavBar from "./routers/NavBar";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import SignIn from "./components/Sign-in";
import ShopItems from "./components/ShopItems";
import SignUpForm from "./components/SignUpForm";
import {useContext, useEffect} from "react";
import {createUserDocFromAuth, onAuthStateChangedListener,} from "../utils/firebase";
import {IUser, UserContext} from "./context/user.context";

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
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Shop />} />
            <Route path="shop/:collection" element={<ShopItems />} />
            <Route path="contact" element={<Contact />} />
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
    </>
  );
}

export default App;
