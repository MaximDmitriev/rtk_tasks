import { createSelector, createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: null,
    lastName: null,
    userName: null,
    token: null,
    loading: 'idle', // | authorized | error | pending,
  },
  reducers: {
    logIn: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.userName = payload.userName;
      state.token = payload.token;
    },
    logOut: state => {
      state.firstName = null;
      state.lastName = null;
      state.userName = null;
      state.token = null;
      state.loading = 'idle';
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

const userSelector = state => state.user;
export const userNameSelector = createSelector(userSelector, state => state.firstName);
export const userLastNameSelector = createSelector(userSelector, state => state.lastName);
export const userTokenSelector = createSelector(userSelector, state => state.token);
export const { logIn, logOut, setLoading } = userSlice.actions;
export default userSlice.reducer;
