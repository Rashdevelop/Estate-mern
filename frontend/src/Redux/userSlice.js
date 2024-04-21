import { createSlice } from "@reduxjs/toolkit";
const initialState={
    loading:false,
    currentUser:null,
    error:null
};
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
         signInStart:(state)=>{
            state.loading=true;
         },
         signInSuccess:(state,action)=>{
            state.loading=false;
            state.currentUser=action.payload;
         },
         signInFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
         }
    }
});
export const  {signInFail,signInStart,signInSuccess} = userSlice.actions;
export default userSlice.reducer;