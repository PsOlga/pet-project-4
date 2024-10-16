

import styles from "./style.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {cart} from "../../store/selectors";
import {useState} from "react";

function  CartComponent () {
    const cartProducts = useSelector(cart);
    const count = cartProducts.length;

    const [isHovered, setIsHovered] = useState(false);

    const handleBadgeMouseEnter = () => setIsHovered(true);
    const handleBadgeMouseLeave = () => setIsHovered(false);

    return (
        <NavLink to="/cart">
            <div className={styles.iconWrapper}>
                <svg className={`${styles.CartIcon} ${isHovered ? styles.iconWrapperHovered : ''}`} width="44"
                     height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22 0C16.4961 0 12.0565 4.37372 12.0565 9.79592V11.7551H4.19492L4.10169 12.6122L0.124294 46.898L0 48H44L43.8757 46.898L39.8983 12.6122L39.8051 11.7551H31.9435V9.79592C31.9435 4.37372 27.5039 0 22 0ZM22 1.95918C26.4396 1.95918 29.9548 5.42219 29.9548 9.79592V11.7551H14.0452V9.79592C14.0452 5.42219 17.5604 1.95918 22 1.95918ZM5.99717 13.7143H12.0565V15.949C11.4622 16.2895 11.0621 16.9094 11.0621 17.6327C11.0621 18.7156 11.9516 19.5918 13.0508 19.5918C14.1501 19.5918 15.0395 18.7156 15.0395 17.6327C15.0395 16.9094 14.6395 16.2895 14.0452 15.949V13.7143H29.9548V15.949C29.3605 16.2895 28.9605 16.9094 28.9605 17.6327C28.9605 18.7156 29.8499 19.5918 30.9492 19.5918C32.0484 19.5918 32.9379 18.7156 32.9379 17.6327C32.9379 16.9094 32.5378 16.2895 31.9435 15.949V13.7143H38.0028L41.7627 46.0408H2.23729L5.99717 13.7143Z"
                        fill="currentColor"/>
                </svg>
                {count > 0 && (
                    <div
                        className={styles.badge}
                        onMouseEnter={handleBadgeMouseEnter}
                        onMouseLeave={handleBadgeMouseLeave}
                    >
                        <span className={styles.badgeText}>{count}</span>
                    </div>
                )}
            </div>
        </NavLink>
    );
}
export default CartComponent;