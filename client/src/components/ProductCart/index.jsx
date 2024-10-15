import API_URL from "../../utils/api";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import AddButtonBlue from "../buttons/AddButonBlue.jsx";
function ProductCard ({product}) {

    return(
       

<Link key={product.id} className={styles.product_Card}
          to={`/productAll/${product.id}`}
          >
            <img 
              src={`${API_URL}/${product.image}`}  
              alt={product.title} 
              className={styles.product_image} 
              style={{ width: "150px", height: "150px" }}
            />
            <AddButtonBlue className={styles.hidden_Btn}/>
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
          </Link>
        
    )
}
          export default ProductCard;