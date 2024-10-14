import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { Link, Button } from "@mui/material";
import API_URL from "../../utils/api";

function ProductsHome () {
    const { products } = useSelector((state) => state.products);
  
    // Функция для получения случайных товаров
    const getRandomProducts = (products, num) => {
      const shuffled = [...products].filter(product => product.discont_price).sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };
  
    // Получаем 4 случайных товара
    const randomCategories = products?.length > 0 ? getRandomProducts(products, 4) : [];
  

    return(
        <div className={styles.container}>
        <div className={styles.header_products_home}>
       
            <h1 className={styles.h2_products_home}>Sale</h1>
    
          <div className={styles.linie}></div>
          <div className={styles.btn_div}>
            <Link do="/pages/ProductsAll">
              <Button
                // className={styles.btn_products_home}
                sx={{
                  color: "rgba(139, 139, 139, 1)",
                  border: "1px solid rgba(139, 139, 139, 1)",
                  marginRight: "40px",
                  fontSize: "16px", // Изменение размера текста
                  padding: "8px 16px",
                  whiteSpace: "nowrap",
                }}
                variant="outlined"
                href="#outlined-buttons"
              >
                All sales
              </Button>
            </Link>
          </div>
        </div>
  <div className={styles.product_Card_Container}>
  
          {randomCategories.map((product) => (
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
             <h3  className={styles.product_h3} >{product?.title}</h3>
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

export default ProductsHome;