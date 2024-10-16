import { useSelector, useDispatch } from "react-redux";

import { setFilter, toggleDiscount } from "../../store/filterSlice";
import { filter } from "../../store/selectors";
import CustomSelect from "../Filters/CustomSelect";
import styles from "./style.module.css";

// этот объект отвечает за все поля селектроа
const options = [
    { value: 'default', label: 'by default' },
    { value: 'newest', label: 'newest' },
    { value: 'price-high-low', label: 'price: high-low' },
    { value: 'price-low-high', label: 'price: low-high' },
];


function SortControlPanel ({shouDiscountChecbox = true}) {
    const dispatch = useDispatch();
    const customFilter = useSelector(filter);
    const handleSelectChange = (value) => {
        dispatch(setFilter({
            ...customFilter,
            sort: value
        }))
    };
    const onChangePriceFrom = (e) => {
        const value = Number(e.target.value);
        dispatch(setFilter({
            ...customFilter,
            price: {...customFilter.price,
                from: value
            }
        }))
    }
    const onChangePriceTo = (e) => {
        const value = Number(e.target.value);
        dispatch(setFilter({
            ...customFilter,
            price: {...customFilter.price,
                to: value
            }
        }))
    }

    const handleCheckbox = () => {
        dispatch(toggleDiscount(!customFilter.isDiscount));
    }

   return (
    <div className={styles.container}>
        <div className={styles.filter_price_div}>
                <span>
                    Price
                </span>
                <div className={styles.price_input_div}>
            <label 
                className={styles.labelAll}
                htmlFor="priceFromInput"
            >
              
                <input 
                className={styles.input_price}
                type="number" 
                min={0} placeholder="from" 
                value={customFilter.price.from } 
                onChange={onChangePriceFrom}  />
            </label>

            <label htmlFor="priceToInput">
            <input 
             className={styles.input_price}
            type="number" 
            min={0} 
            placeholder="to"
             value={customFilter.price.to } 
             onChange={onChangePriceTo}  />

            </label>
            </div>
        </div>
        <div  className={styles.checkbox_div}>
        {shouDiscountChecbox && (
            <label 
            className={styles.labelCheckbox}
            htmlFor="discountItemsCheckbox">
                <span >
                    Discounted items
                </span>
                <input 
                className={styles.checkbox}
                type="checkbox" 
                id="discountItemsCheckbox" 
                onChange={handleCheckbox}
                checked={customFilter.isDiscount}
                />
            </label>
        )}
        </div>
        <div className={styles.sorted}>
        <label 
        className={styles.label_sorted}
        htmlFor="sortedBy">
            <span>
                Sorted
            </span>
            <CustomSelect 
                options={options}
                value={customFilter.sort}
                onChange={handleSelectChange}
            />
        </label>
        </div>
    </div>
   )
    
}

export default SortControlPanel;