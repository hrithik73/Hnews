import { createSlice } from '@reduxjs/toolkit';

export const storySlice = createSlice({
  name: 'story',
  initialState: [],
  reducers: {
    addToFav: () => {},
    removeFromFav: () => {},
  },
});

export const { addToFav, removeFromFav } = storySlice.actions;

export default storySlice.reducer;
