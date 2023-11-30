import { Routes, Route } from "react-router-dom";
import Home from "../layout/home";
import NotFound from "../layout/notFoundPage";
import Login from "../layout/loginPage";
import SearchResult from "../layout/searchResultPage";
import EnterMemberInfo from "../layout/enterMemberInfoPage";
import Detail from "../layout/detail";
import ShoppingCart from "../layout/shoppingCart";
import Purchase from "../layout/purchase";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/search/:id" element={<Detail />} />
      <Route path="/shoppingCart" element={<ShoppingCart />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/enterMemberInfo" element={<EnterMemberInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Router;
