import {createSlice} from "@reduxjs/toolkit";
import { getCategories } from "./actionCreators";

const initialState = {
    categories: [],
    error: null,
    status: "IDLE",
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.status = "PENDING";
            state.error = null;
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.status = "FAILED";
            state.error = action.payload;
            state.categories = [];
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.status = "SUCCESS";
            state.error = null;
            state.categories = action.payload;
        })
        
    }





})
export default categoriesSlice.reducer;