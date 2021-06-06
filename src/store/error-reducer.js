import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    code: null,
    serverMessage: null,
    hasErrors: false,
  },
  reducers: {
    setError: (state, { payload }) => {
      state.code = payload.code;
      state.serverMessage = payload.text;
      state.hasErrors = true;
    },
    clearErrors: state => {
      state.code = null;
      state.serverMessage = null;
      state.hasErrors = false;
    },
  },
});

export const { setError, clearErrors } = errorSlice.actions;
export default errorSlice.reducer;
