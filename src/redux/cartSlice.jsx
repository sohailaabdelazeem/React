import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getProducts=createAsyncThunk('Product/getProducts',async()=>{
   let {data: cart}= await axios.get(`https://fakestoreapi.com/products`)
   console.log(cart)

  const productDetails = await Promise.all(
    cart.products.map(async (item) => {
      const { data: product } = await axios.get(`https://fakestoreapi.com/products/${item.productId}`);
      return { ...product, quantity: item.quantity }; 
    })
  );

  console.log("Product Details:", productDetails);
  return productDetails;
})
const initialState ={
    products:[],
    isloading:false
}
let productslicesCart=createSlice({
    name: "Product",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,actions)=>{
                console.log(actions);
                state.products=actions.payload
                state.isloading=false
        })
        builder.addCase(getProducts.pending,(state,actions)=>{
             state.isloading=true
        })
        builder.addCase(getProducts.rejected,(state,actions)=>{
            console.log(state);
             state.isloading=false
         })
    }
})
 
export default productslicesCart.reducer;
