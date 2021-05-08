import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: null,
    lastName: null,
    userName: null,
    token: null,
    loading: false,
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
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { logIn, logOut, setLoading } = userSlice.actions;
export default userSlice.reducer;
