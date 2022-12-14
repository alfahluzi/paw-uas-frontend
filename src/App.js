import { Route, Routes } from "react-router-dom";
import Dashboard from "./page/admin/Dashboard";
import ManageCategory from "./page/admin/ManageCategory";
import Product from "./page/admin/Product";
import Transaction from "./page/admin/Transaction";
import DashboardUser from "./page/user/DashboardUser";
import CartUser from "./page/user/CartUser";
import RegisterUser from "./page/user/RegisterUser";
import LoginUser from "./page/user/LoginUser";
import Checkout from "./page/user/Checkout";
import LaporanPenjualan from "./page/admin/LaporanPenjualan";
import "./style/App.css";
import Pembayaran from "./page/user/Pembayaran";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/registration" element={<RegisterUser />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<DashboardUser />} />
        <Route path="/cart" element={<CartUser />} />
        <Route path="/administration" element={<Dashboard />} />
        <Route path="/administration-transaction" element={<Transaction />} />
        <Route path="/administration-product" element={<Product />} />
        <Route path="/administration-laporan" element={<LaporanPenjualan />} />
        <Route
          path="/administration-product-category"
          element={<ManageCategory />}
        />
      </Routes>
    </div>
  );
}

export default App;
