// import React, { useState, useEffect } from 'react';
import styles from "./style.module.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import API_URL from "../../utils/api";
import { useSelector } from 'react-redux';


function CategoriesAll ()
     {
        // const [categories, setCategories] = useState([]);
        const location = useLocation();
        const navigate = useNavigate();
    
      const {categories} = useSelector(( state) => state.categories);



        const isCurrentPage = (path) => {
          return location.pathname === path;
        };
      
        const handleCategoryClick = (categoryId) => {
          navigate(`/categoriesAll/${categoryId}`);
        };


        return (
            <div className={styles.containerCategories}>
    
              <div className={styles.categoriesPageHeader}>
                <Link to="/">
                  <button className={`categoriesPageBtn ${isCurrentPage('/') ? 'active' : ''}`}>
                    Main Page
                  </button>
                </Link>
                <div className={styles.btnLine}></div>
                <Link to="/categoriesAll">
                  <button className={`categoriesPageBtn ${isCurrentPage('/categoriesAll') ? 'active' : ''}`}>
                    All categories
                  </button>
                </Link>
              </div>
              <h3 className={styles.categoriesHeaderTitle}>Categories</h3>
              {categories.length > 0 ? (
                <div className={styles.categoriesPageGrid}>
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className={styles.categoriesPageItem}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.image ? (
                        <img src={`${API_URL}${category.image}`} alt={category.title} className={styles.categoriesPageImage} />
                      ) : (
                        <div className={styles.placeholderImage}>No Image</div>
                      )}
                      <p className={styles.categoriesPageTitle}>{category.title}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Loading data...</p>
              )}
            </div>
          );
        };

export default CategoriesAll;


