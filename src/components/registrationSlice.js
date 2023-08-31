import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    registeredUsers: [],

};

const registrationSlice = createSlice({

    name: 'registration',

    initialState,

    reducers: {

        registerUser: (state, action) => {

            state.registeredUsers.push(action.payload);

        },

    },

});
export const { registerUser } = registrationSlice.actions;

export default registrationSlice.reducer;