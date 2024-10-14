import styles from "./style.module.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import API_URL from "../../utils/api";
import SortControlPanel from "../../components/SortCotnrolPanel";
import { filtredProducts } from "../../store/selectors";

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
          <div key={product.id} className={styles.product_Card}>
            <img 
              src={`${API_URL}/${product.image}`}  
              alt={product.title} 
              className={styles.product_image} 
              style={{ width: "150px", height: "150px" }}
            />
            <div>
              <h3 className={styles.h3_sales_page}>{product.title}</h3>
              <div className={styles.price_product}>
                <p className={styles.product_D_Price}>
                  ${product.discont_price ? product.discont_price : product.price}
                </p>
                {product.discont_price && (
                  <div className={styles.product_Price}>
                    <p className={styles.productPrice}>${product.price}</p>
                  </div>
                )}
              </div>

              {product.discont_price && (
                <p className={styles.product_lable}>
                  -{Math.round(((product.price - product.discont_price) * 100) / product.price)}%
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsAll;