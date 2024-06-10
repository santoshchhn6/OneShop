import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import ProductCategories from "./pages/ProductCategories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product_categories" element={<ProductCategories />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />

          <Route path="*" element={<h1>Page Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
