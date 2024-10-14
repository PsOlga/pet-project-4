import React from "react";
import styles from "./style.module.css";

function Filter({ searchParams, setSearchParams }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(name, value);
    setSearchParams(newSearchParams);
  };

  return (
    <div className={styles.filter_Price}>
      <div className={styles.price_block}>
      <span >Price</span>
      </div>
      <div className={styles.price_block}>
      <label>
        <input
          name="minPrice"
          type="number"
          placeholder="from"
          value={searchParams.get("minPrice") || ""}
          onChange={handleChange}
          className={styles.price_block}
        />
      </label>
      </div>
      <div className={styles.price_block}>
      <label>
        <input
          name="maxPrice"
          type="number"
          placeholder="to"
          value={searchParams.get("maxPrice") || ""}
          onChange={handleChange}
          className={styles.price_block}
        />
      </label>
      </div>
    </div>
  );
}

export default Filter;