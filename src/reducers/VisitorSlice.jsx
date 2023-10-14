import {createSlice} from '@reduxjs/toolkit';
 
const visitorSlice =  createSlice({
    name: 'visitor',
    initialState:{
        name:'',
        email:'',
        message:'',
    },
    reducers:{
        setSubmit(state,action){
            const {name , email , message} = action.payload;
            state.name = name;
            state.email = email;
            state.message = message;
        }
    }
}) 

export const {setSubmit} = visitorSlice.actions;

export default visitorSlice.reducer;

