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
    saveAction: (state, action: PayloadAction<string>) => {
      console.log('user-->', state.favStories.includes(action.payload));
      if (state.favStories.includes(action.payload)) {
        // when the story is already saved
        let idxOfItemToRemove = state.favStories.findIndex(
          (item) => item === action.payload
        );
        console.log({ idxOfItemToRemove });

        if (idxOfItemToRemove > -1) {
          // only splice array when item is found
          state.favStories.splice(idxOfItemToRemove, 1);
        }
        console.log(state);
      } else {
        state.favStories.push(action.payload);
      }
    },
  },
});

export const { saveAction } = storySlice.actions;

export default storySlice.reducer;
