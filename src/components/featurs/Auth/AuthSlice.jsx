import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  name: "test",
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    newName: (state, { type, payload }) => {

        state.name = payload;
        console.log(state.name);
    

    },
  },
});
export default AuthSlice;
export const { newName } = AuthSlice.actions;
export const reducer = AuthSlice.reducer;