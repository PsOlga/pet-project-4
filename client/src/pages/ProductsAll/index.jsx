import styles from "./style.module.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import API_URL from "../../utils/api";
import SortControlPanel from "../../components/SortCotnrolPanel";
import { filtredProducts } from "../../store/selectors";
import ProductCard from "../../components/ProductCart";

function ProductsAll () {
 
  const navigate = useNavigate();
  // const {products} = useSelector((state) => state.products);
  const location = useLocation();
  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  const handleCategoryClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const products  = useSelector(filtredProducts);
  
    // Функция для получения случайных товаров
    const getRandomProducts = (products, num) => {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };
  
    // Получаем 8 случайных товара
    const randomCategories = products?.length > 0 ? getRandomProducts(products, 12) : [];
  
  return (
    <div className={styles.container}>
      <div className={styles.products_Page_Header}>
        <Link to="/">
          <button className={`${styles.homePageBtn} ${isCurrentPage('/') ? styles.active : ''}`}>
            Main Page
          </button>
        </Link>
        <div className={styles.btnLine}></div>
        <Link to="/productsAll">
          <button className={`${styles.productsPageBtn} ${isCurrentPage('/productsAll') ? styles.active : ''}`}>
            All products
          </button>
        </Link>

      </div>

      <h1 className={styles.h2_sales_page}>All products</h1>
<SortControlPanel />

      <div className={styles.product_Card_Container}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsAll;