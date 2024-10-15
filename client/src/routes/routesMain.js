
import { Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage/index.jsx";
import CategoriesAll from "../pages/CategoriesAll/index.jsx";
import ProductsAll from "../pages/ProductsAll/index.jsx";
import Cart from "../pages/CartPage/index.jsx";
import AllSales from '../pages/allSales/index.jsx';
import Category from '../pages/Category/index.jsx';
import ProductDetails from '../pages/ProductDetails/index.jsx';

function RoutesMain (){
    return (
     
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categoriesAll" element={<CategoriesAll />} />
          <Route path="/productsAll" element={<ProductsAll />} />
          <Route path="/salesAll" element={<AllSales />} />
          <Route path="/categoriesAll/:categoryId" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productAll/:productId" element={<ProductDetails />} />
        </Routes>
    )
}
export default RoutesMain;


