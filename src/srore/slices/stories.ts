import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IStoryState {
  favStories: Array<string>;
}

const initialState: IStoryState = {
  favStories: [],
};

export const storySlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<string>) => {
      state.favStories.push(action.payload);
    },
    removeFromFav: (state, action: PayloadAction<string>) => {
      let idxOfItemToRemove = state.favStories.findIndex(
        (item) => item === action.payload
      );
      console.log({ idxOfItemToRemove });
      state.favStories.splice(idxOfItemToRemove, 1);
      console.log(state);
    },
  },
});

export const { addToFav, removeFromFav } = storySlice.actions;

export default storySlice.reducer;
