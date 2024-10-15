import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";

import styles from "./style.module.css";
import { filtredProducts } from "../../store/selectors";
import { toggleDiscount } from "../../store/filterSlice";
import SortControlPanel from "../../components/SortCotnrolPanel";
import ProductCard from "../../components/ProductCart";

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
            <ProductCard product={product}/>
          ))}
        </div>
  </div>
        
   
    );
  }

export default AllSales;