import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";

import styles from "./style.module.css";
import { filtredProducts } from "../../store/selectors";
import { toggleDiscount } from "../../store/filterSlice";
import API_URL from "../../utils/api";
import SortControlPanel from "../../components/SortCotnrolPanel";

function AllSales () {
    
    const products = useSelector(filtredProducts);
    const dispatch = useDispatch();
    const location = useLocation();
    const isCurrentPage = (path) => {
      return location.pathname === path;
    };
  
  useEffect(() => {
  dispatch(toggleDiscount(true))
  }, []);

    return(
        <div className={styles.container}>
        <div className={styles.header_sales_page}>
        <div className={styles.sales_Page_Header}>
        
        <Link to="/">
          <button className={`${styles.homePageBtn} ${isCurrentPage('/') ? styles.active : ''}`}>
            Main Page
          </button>
        </Link>
        <div className={styles.btnLine}></div>
        <Link to="/salesAll">
          <button className={`${styles.salesPageBtn} ${isCurrentPage('/salesAll') ? styles.active : ''}`}>
            All sales
          </button>
        </Link>
        
      </div>
            <h1 className={styles.h2_sales_page}>Discounted items</h1>

        </div>
      <SortControlPanel shouDiscountChecbox={false} />



          <div className={styles.product_Card_Container}>
  
          {products.map((product) => (
            <div key={product?.id} 
            className={styles.product_Card}>
              {/* Отображение картинки */}
              <img 
                src={`${API_URL}/${product?.image}`}  
                alt={product?.title} 
                className={styles.product_image} 
                style={{ width: "150px", height: "150px" }}
              />
             <div >
             <h3  className={styles.h3_sales_page} >{product?.title}</h3>
             <div className={styles.price_product}>
             <p className={styles.product_D_Price}>
                        ${product?.discont_price ? product?.discont_price : product?.price}
                    </p>
                    <div className={styles.product_Price}>
                {product?.discont_price && <p className={styles.productPrice}>${product?.price}</p>}
                </div>
             </div>

            
               {product?.discont_price && (
                <p   className={styles.product_lable} >-{Math.round(((product?.price - product?.discont_price) * 100) / product?.price)}%
                </p>
               )}
            
             </div>
             
            </div>
          ))}
        </div>
  </div>
        
   
    );
  }

export default AllSales;