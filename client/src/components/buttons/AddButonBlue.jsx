import { useState } from 'react';
import styles from "./style.module.css";

function AddButtonBlue({ onClick, className }) {
  const [state, setState] = useState('normal');

  const handleClick = (e) => {
    setState('added');
    if (onClick) {
      onClick(e);
    }
    setTimeout(() => setState('normal'), 2000);
  };

  return (
    <button
      className={`${styles.addBlueButton} ${state === 'added' ? styles.addedState : ''} ${className}`}
      onClick={handleClick}
    >
      {state === 'added' ? 'Added' : 'Add to cart'}
    </button>
  );
}

export default AddButtonBlue;