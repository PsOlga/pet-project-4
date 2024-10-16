import { useState } from "react";
import styles from "./style.module.css";

function CastomSelect ({options, value, onChange}) {

    const [isOpen, setIsOpen] = useState(false);
    
    const handleOptionClick = (value) => {
        setIsOpen(false);
        if (onChange) {
            onChange(value);
        }
    };

    return (

<div className={styles.custom_select_container}>
  <div
    className={`${styles.custom_select} ${isOpen ? styles.open : ''}`}
    onClick={() => setIsOpen(!isOpen)}
  >
    <span >{value || "Select option"}</span>
    <div className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`} />
  </div>
  {isOpen && (
    <ul className={styles.custom_options}>
      {options.map((option) => (
        <li
          key={option.value}
          className={`${styles.custom_option} ${option.value === value ? styles.selected : ''}`}
          onClick={() => handleOptionClick(option.value)}
        >
          {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CastomSelect;