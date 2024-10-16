import { useState } from 'react';
import styles from "./style.module.css";

function AddButtonBlue({  className, clickedText, product, onClick, isDisabled }) {
  // const [state, setState] = useState('normal');

  // const handleClick = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   setState('added');
  //   if (onClick) {
  //     onClick(e);
  //   }
  //   setTimeout(() => setState('normal'), 2000);
  // };

  return (
    <button
      // className={`${styles.addBlueButton} ${state === 'added' ? styles.addedState : ''} ${className}`}
      className={`${className} ${styles.addBlueButton}`}
      onClick={(event) => onClick(event , product)}
      disabled={isDisabled}
    >
      {clickedText}
      {/* {state === 'added' ? 'Added' : 'Add to cart'} */}
    </button>
  );
}

export default AddButtonBlue;