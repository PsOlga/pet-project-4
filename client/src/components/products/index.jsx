import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { Link, Button } from "@mui/material";
import API_URL from "../../utils/api";
import ProductCard from "../ProductCart";

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
        
          <ProductCard product={product}/>  
           
          ))}
        </div>
  </div>
        
   
    );
  }

export default ProductsHome;