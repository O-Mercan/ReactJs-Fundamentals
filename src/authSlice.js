import { createSlice } from "@reduxjs/toolkit"

// initial values
const initialState={
    isAuthenticated: false,
    user:null,
}

const authSlice= createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state, action)=> { // if the user is logged in
            state.isAuthenticated= true;
            state.user= action.payload
        }, // end login
        logout: (state)=> {
            state.isAuthenticated= false;
            state.user= null;
        }, //end logout
    } // end reducers
}) // end authSlice

// Export
export const {login, logout}= authSlice.actions;
export default authSlice.reducer;