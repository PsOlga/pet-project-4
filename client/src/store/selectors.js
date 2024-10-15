
import { createSelector } from "@reduxjs/toolkit";

const productsSlice = (state) => state.products;
const products = createSelector(productsSlice, (state) => state.products);
export const filter = (state) => state.filter;

const cartSlice = (state) => state.cartReducer;
console.log(cartSlice)
const cart = createSelector(cartSlice, (state) => state.cartProducts);

export const categories = (state) => state.categories.categories;
export const currentCategoryTitle = createSelector(categories,
    (state, categoryId) => categoryId,
    (categories, categoryId) => categories.find((cat) => cat.id === categoryId)?.title);


export const filtredProducts = createSelector(
    products, filter, cart,
    (_, categoryId) => categoryId,
    (productsFromState, filterFromState, cartFromState, categoryIdFromState ) => {
        const products = categoryIdFromState ?[...productsFromState.filter((product) => product.categoryId === Number(categoryIdFromState))] : [...productsFromState];
        if (filterFromState.isDiscount) {
            return products
            .filter(product => product.discont_price !== null)
            .filter((product) => {
                return product.discont_price >= filterFromState.price.from && product.discont_price <= filterFromState.price.to;
            
            })
            .sort((a, b) => {
                if (filterFromState.sort === "newest") {
                    return b.id - a.id;
                }
                if (filterFromState.sort === "price-low-high") {
                    return a.discont_price - b.discont_price;
                }
                if (filterFromState.sort === "price-high-low") {
                    return b.discont_price - a.discont_price;
                }
                return a.id - b.id;
            }).map((product) => {
                if (cartFromState.find((item) => product.id === item.id )) {
                    return {...product, isInCart: true};
                } else {
                    return product;
                }
            });
        } else {
            return products
            .filter((product) => {
                return product.discont_price ?
                    product.discont_price >= filterFromState.price.from && product.discont_price <= filterFromState.price.to :
                    product.price >= filterFromState.price.from && product.price <= filterFromState.price.to;
            }) 
            .sort((a, b) => {
                if (filterFromState.sort === "newest") {
                    return b.id - a.id;
                }
                if (filterFromState.sort === "price-low-high") {
                   return ((a.discont_price ?? a.price) - (b.discont_price ?? b.price));
                }
                if (filterFromState.sort === "price-high-low") {
                    return ((b.discont_price ?? b.price) - (a.discont_price ?? a.price));
                }
                return a.id - b.id;
            }).map((product) => {
                if (cartFromState.find((item) => product.id === item.id )) {
                    return {...product, isInCart: true};
                } else {
                    return product;
                }
            });
        }
    }
)

export const selectProductById = createSelector(
    (state) => state?.products?.products,
    (state) => state?.cartReducer?.cartProducts,
    (state, productId) => productId,
    (products, cartProducts, productId) => {
        const productInCart = cartProducts?.find((item) => item.id === Number(productId));
        if (productInCart) {
            return productInCart;
        } else {
            return products.find((item) => {
                return item.id === Number(productId);
            });
        }
    }
)