
import API_URL from "../../utils/api";
import { Button } from "@mui/material";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CategorieHome() {
  const { categories } = useSelector((state) => state.categories);
  
  // Функция для получения случайных товаров
  const getRandomProducts = (products, num) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  // Получаем 4 случайных товара
  const randomCategories = categories?.length > 0 ? getRandomProducts(categories, 4) : [];

  return (
    <div className={styles.container}>
      <div className={styles.header_categories_home}>
        <div className={styles.h2_div}>
          <h2 className={styles.h2_categories_home}>Categories</h2>
        </div>
        <div className={styles.linie}></div>
        <div className={styles.btn_div}>
          <Link to="/categoriesAll">
            <Button
              className={styles.btn_categories_home}
              sx={{
                color: "rgba(139, 139, 139, 1)",
                border: "1px solid rgba(139, 139, 139, 1)",
                marginRight: "40px",
                size: "16px",
                padding: "8px 16px",
                whiteSpace: "nowrap",
                "@media (max-width: 768px)": {
                marginRight: "20px",
              },
              "@media (max-width: 576px)": {
                marginRight: "10px",
              },
              }}
              variant="outlined"
              href="#outlined-buttons"
            >
              All categories
            </Button>
          </Link>
        </div>
      </div>
       
<div className={styles.categories_Card_Container}>

        {randomCategories.map((category) => (
    
          <Link 
          to={`/categoriesAll/${category.id}`}
          key={category?.id} 
          className={styles.categories_Card}>
            {/* Отображение картинки */}
            <img 
              src={`${API_URL}${category?.image}`}  
              alt={category?.title} 
              className={styles.categories_image} 
            />
            {/* Отображение заголовка */}
            <h3  className={styles.categories_card_h3} 
            >{category?.title}</h3>
          
          </Link>
   
        ))}
         
      </div>
</div>
      
 
  );
}

export default CategorieHome;