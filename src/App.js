import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./pages/dashboard/Categories";
import Home from "./pages/dashboard/Home";
import Investment from "./pages/dashboard/Investment";
import Product from "./pages/dashboard/Product";
import SharedLayout from "./pages/dashboard/SharedLayout";
import Transaction from "./pages/dashboard/Transaction";
import User from "./pages/dashboard/User";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product" element={<Product />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/transaction" element={<Transaction />} />
        </Route>
        <Route path="/signUp" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
