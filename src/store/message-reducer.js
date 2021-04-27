import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    text: null,
    type: null,
    in: false,
  },
  reducers: {
    addMessage: (state, { payload }) => {
      state.text = payload.text;
      state.type = payload.type;
      state.in = true;
    },
    clearMessage: state => {
      state.text = null;
      state.type = null;
      state.in = false;
    },
  },
});

export const { addMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
