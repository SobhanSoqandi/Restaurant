import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

function AuthReducer() {

    const initialState = {
        name: "lionelmessi"
    }

    const HomeSlice = createSlice({
        name: "HomeSlice",
        initialState,
        reducers: {
            newName: (state, action) => {
                state.name = action.payload;
            },
        }
    });


    return (
        <div>
            readucer auth
        </div>
    )
}

export const { newName } = HomeSlice.actions;
export const reducer = HomeSlice.reducer;

export default AuthReducer


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "test",
// };

// const HomeSlice = createSlice({
//   name: "HomeSlice",
//   initialState,
//   reducers: {
//     newName: (state, action) => {
//       state.name = action.payload;
//     },
//   },
// });

// export const { newName } = HomeSlice.actions;
// export const reducer = HomeSlice.reducer;
