
import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css"
import logo from "../assets/header-img/logo.svg";
import basket from "../assets/header-img/Basket.svg"


const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to="/">
        <img src={logo} alt="logo"></img>
        </Link>
      </div>
      <nav className={styles.headerNav}>
        <Link to="/" className={styles.linkHeader}>Main Page</Link>
        <Link to="/categoriesAll" className={styles.linkHeader}>Categories</Link>
        <Link to="/productsAll" className={styles.linkHeader}>All products</Link>
        <Link to="/salesAll" className={styles.linkHeader}>All sales</Link>
      </nav>
      <div className={styles.basketHeader}>
      <Link to="/cart">
        <img src={basket} alt="basket"></img>
        </Link>
      </div>
    </header>
  );
};
export default Header;

