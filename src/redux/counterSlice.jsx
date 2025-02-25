import { createSlice } from "@reduxjs/toolkit";
 
const initialState={
    count:0
}
let counterSlices=createSlice({
    name:'Counter',
    initialState,
    reducers:{
        increase:(state,action)=>{
            state.count+=1
        },
        decrease:(state,action)=>{
            state.count-=1
        },
    }
})

const counterreducer=counterSlices.reducer
export default counterreducer

export let {increase,decrease} =counterSlices.actions