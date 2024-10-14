import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { currentCategoryTitle, filtredProducts } from "../../store/selectors";
import styles from "./style.module.css";
import API_URL from "../../utils/api";
import { Link } from "react-router-dom";
import SortControlPanel from "../../components/SortCotnrolPanel";
import { useLocation } from "react-router-dom";

function Category () {

const {categoryId} = useParams();
const categoryProducts = useSelector((state) => filtredProducts(state, Number(categoryId)) );
const categoryTitle =  useSelector((state) => currentCategoryTitle(state, Number(categoryId)) );


const location = useLocation();
  const isCurrentPage = (path) => {
    return location.pathname === path;
  };
  const { categories } = useSelector((state) => state.categories);
  

   return (
        <div className={styles.container}>
  
        <div className={styles.category_Page_Header}>
        <Link to="/">
          <button className={`${styles.homePageBtn} ${isCurrentPage('/') ? styles.active : ''}`}>
            Main Page
          </button>
        </Link>
        <div className={styles.btnLine}></div>
        <Link to="/categoriesAll">
          <button className={`${styles.categoryesPageBtn} ${isCurrentPage('/categoriesAll') ? styles.active : ''}`}>
            All categories
          </button>
        </Link>
        <div className={styles.btnLine}></div>
        <Link to="/categoriesAll/:categoryId">
          <button className={`${styles.categoryPageBtn} ${isCurrentPage('/categoriesAll/:categoryId') ? styles.active : ''}`}>
          Dry & Wet Food
          </button>
        </Link>
      </div>



        <h1 className={styles.h2_category_page}>{categoryTitle}</h1>
      <SortControlPanel />
  
        <div className={styles.product_Card_Container}>
          {categoryProducts.map((product) => (
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
    

export default Category;