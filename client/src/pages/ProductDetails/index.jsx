import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import styles from "./style.module.css";
import AddButtonBlue from '../../components/buttons/AddButonBlue';
import Modal from '../../components/CustomModal';
import API_URL from "../../utils/api";
import addToCart, { addProductToCart } from "../../store/cartSlice";
import { selectProductById } from '../../store/selectors';


const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();



const productFromState = useSelector( (state)=> selectProductById(state, productId) );
const [product, setProduct] = useState(null);
const isInCart = Boolean(productFromState?.quantity);
useEffect(() => {
  if (productFromState) {
    setProduct(isInCart ? productFromState : {...productFromState, quantity: 1})
  }
}, [productFromState]);
const incrementQuantity = () => {
  setProduct({...product, quantity: product.quantity + 1})
}

const decrementQuantity = () => {
  if (product?.quantity > 1) {
      setProduct({...product, quantity: product.quantity - 1})
  }
}
const handleClick = (_, product) => {
  console.log(product);
  dispatch(addProductToCart(product));
  setModalMessage('Product added to cart successfully!');
      setShowModal(true);
}

  const handleModalClose = () => {
    setShowModal(false);
    setModalMessage('');
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const continueShopping = () => {
    navigate('/productAll/:productId');
  };

  const isCurrentPage = (path) => location.pathname === path;

  return (
    <div className={styles.productDetailsBox}>
      <div className={styles.categoriesPageHeader}>
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
        <div className={styles.btnLine}></div>
        <Link to="/productAll/:productId">
          <button className={`${styles.productPageBtn} ${isCurrentPage('/productAll/:productId') ? styles.active : ''}`}>
          {productId}
          </button>
        </Link>
       
      </div>
      <div className={styles.productDetails}>
        <div className={styles.productImageContainer}>
          <img
            src={`${API_URL}${product?.image}`}
            alt={product?.title}
            className={styles.details}
          />
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.productDetailsTitle}>{product?.title}</h3>
          <div className={styles.productPrice}>
            {product?.discountedPrice !== 'N/A' ? (
              <div className={styles.priceBox}>
                <p className={styles.discountedPrice}>${product?.discont_price}</p>
                <p className={styles.originalPrice}>${product?.price}</p>
                <div className={styles.Badge}>
                  {Math.round(((product?.price - product?.discont_price) / product?.price) * 100)}%
                </div>
              </div>
            ) : (
              <span className={styles.price}>${product?.price}</span>
            )}
          </div>
          <div className={styles.productCounter}>
            <div className={styles.counterLeft} onClick={decrementQuantity}>-</div>
            <span className={styles.counterValue}>{product?.quantity}</span>
            <div className={styles.counterRight} onClick={incrementQuantity}>+</div>
           
           <AddButtonBlue className={styles.detailsButton} clickedText="Added" onClick={(event) => handleClick(event, product)}>
              Add to Cart
            </AddButtonBlue>
           
           
          </div>
          <div className={styles.infoDescription}>
            <h3>Description</h3>
            <p 
              className={`infoDescriptionText ${isExpanded ? 'expanded' : 'collapsed'}`}
            >
              {product?.description}
            </p>
            <button 
              className={styles.readMoreButton}
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ display: product?.description ? 'block' : 'none' }}
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={handleModalClose}
            message={{ 
              title: 'Success', 
              body: modalMessage,
              footer: (
                <div className={styles.modalFooter}>
                  <button onClick={goToCart} className={styles.modalButton}>Go to Cart</button>
                  <button onClick={continueShopping} className={styles.modalButton}>Continue Shopping</button>
                </div>
              )
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;













// import { Link } from "react-router-dom";
// import styles from "./style.module.css";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { currentCategoryTitle, filtredProducts } from "../../store/selectors";

// function Product (){

//     const {productId} = useParams();
// const product = useSelector((state) => filtredProducts(state, Number(productId)) );
// const productTitle =  useSelector((state) => currentCategoryTitle(state, Number(productId)) );


// const location = useLocation();
//   const isCurrentPage = (path) => {
//     return location.pathname === path;
//   };
//   const { products } = useSelector((state) => state.products);




//     return (
// <div className={styles.container}>
// <div className={styles.product_Page_Header}>
//         <Link to="/">
//           <button className={`${styles.homePageBtn} ${isCurrentPage('/') ? styles.active : ''}`}>
//             Main Page
//           </button>
//         </Link>
//         <div className={styles.btnLine}></div>
//         <Link to="/categoriesAll">
//           <button className={`${styles.categoryesPageBtn} ${isCurrentPage('/categoriesAll') ? styles.active : ''}`}>
//             All categories
//           </button>
//         </Link>
//         <div className={styles.btnLine}></div>
//         <Link to="/categoriesAll/:categoryId">
//           <button className={`${styles.categoryPageBtn} ${isCurrentPage('/categoriesAll/:categoryId') ? styles.active : ''}`}>
//           Dry & Wet Food
//           </button>
//         </Link>
//         <Link to="/categoriesAll/:categoryId/:productId">
//           <button className={`${styles.categoryPageBtn} ${isCurrentPage('/categoriesAll/:productId') ? styles.active : ''}`}>
//           Dry & Wet Food
//           </button>
//         </Link>
//       </div>
// </div>
//     )}

//     export default Product;