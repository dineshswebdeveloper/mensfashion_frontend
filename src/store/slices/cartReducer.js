import { createSlice } from "@reduxjs/toolkit";
import  {toast} from "react-toastify"
const cartReducer = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):{cartList:[],cartListTotalAmount:0,cartListTotalCount:0,cartListTotalDiscountAmount:0},
  reducers: {
    addToCart:(state,{payload})=>{
         state.cartList=[...state.cartList,{...payload,count:1,totalamount:payload.price}]
         state.cartListTotalAmount=state.cartList.map(el=>el.totalamount).reduce((total,value)=>total+value,0)
         state.cartListTotalCount=state.cartList.map(el=>el.count).reduce((total,value)=>total+value,0)
         state.cartListTotalDiscountAmount=state.cartList.map((el) => (el.price * el.count * el.offer) / 100).reduce((total, value) => total + value, 0).toFixed()
         localStorage.setItem("cart",JSON.stringify(state))
         toast.success("Product added",{position:"bottom-center",autoClose:3000,closeOnClick:true,theme:"dark",pauseOnHover:true})
    },
    removeFromCart:(state,{payload})=>{
        state.cartList=state.cartList.filter(el=>el._id!==payload._id)
        state.cartListTotalAmount=state.cartList.map(el=>el.totalamount).reduce((total,value)=>total+value,0)
        state.cartListTotalCount=state.cartList.map(el=>el.count).reduce((total,value)=>total+value,0)
        state.cartListTotalDiscountAmount=state.cartList.map((el) => (el.price * el.count * el.offer) / 100).reduce((total, value) => total + value, 0).toFixed()
        localStorage.setItem("cart",JSON.stringify(state))
        toast.success("Product removed",{position:"bottom-center",autoClose:3000,closeOnClick:true,theme:"dark",pauseOnHover:true})
    },
    modifyCartQuantity:(state,{payload})=>{ 
      const foundIndex=state.cartList.findIndex(el=>el._id===payload._id)
      state.cartList[foundIndex]={...payload,totalamount:payload.count*payload.price}
      state.cartListTotalAmount=state.cartList.map(el=>el.totalamount).reduce((total,value)=>total+value,0)
      state.cartListTotalCount=state.cartList.map(el=>el.count).reduce((total,value)=>total+value,0)
      state.cartListTotalDiscountAmount=state.cartList.map((el) => (el.price * el.count * el.offer) / 100).reduce((total, value) => total + value, 0).toFixed()
      localStorage.setItem("cart",JSON.stringify(state))

    },
    initCart:(state)=>{
      localStorage.removeItem("cart")
      return {cartList:[],cartListTotalAmount:0,cartListTotalCount:0,cartListTotalDiscountAmount:0}
    }
  },
});
export const { addToCart,removeFromCart,modifyCartQuantity,initCart} =cartReducer.actions;
export default cartReducer.reducer;
