import API_URL from "../../utils/api";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import AddButtonBlue from "../buttons/AddButonBlue.jsx";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/cartSlice.js";


function ProductCard ({product}) {

const dispatch = useDispatch();

const handleClick = (event, product)=> {
  event.stopPropagation();
  event.preventDefault();
  const productForCart = {...product};
  if(!("quantity" in productForCart)){
    productForCart.quantity = 1;
  } 
  dispatch(addProductToCart(productForCart));
}



    return(
       
<div className={styles.product_Card_Container}>
<Link key={product.id} className={styles.product_Card}
          to={`/productAll/${product.id}`}
          >
            <img 
              src={`${API_URL}/${product.image}`}  
              alt={product.title} 
              className={styles.product_image} 
              style={{ width: "150px", height: "150px" }}
            />
            <AddButtonBlue 
            onClick={handleClick}
            clickedText={product?.isInCart ? "Added to cart" : "Add to cart"}
            product={product}
            isDisabled={product?.isInCart}
            className={styles.hidden_Btn}/>
            <div>
              <h3 className={styles.product_h3}>{product.title}</h3>
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
          </div> 
    )
}
          export default ProductCard;