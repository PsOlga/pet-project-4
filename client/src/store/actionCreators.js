import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../utils/api";

// export const URL_BACKEND = "http://localhost:3333/";

export const getCategories = createAsyncThunk("categories/getCategories", 
    async() => {
        try{
            const responce = await axios.get(`${API_URL}/categories/all`)
            return responce.data
        } catch (error) {
            console.log(error.message);
        }
    } );

    export const getProducts = createAsyncThunk("products/getProducts", 
        async() => {
            try{
                const responce = await axios.get(`${API_URL}/products/all`)
                return responce.data
            } catch (error) {
                console.log(error.message);
            }
        } )





