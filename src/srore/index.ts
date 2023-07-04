import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import stories from './slices/stories';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

// Combine all the reducers
const rootReducer = combineReducers({
  stories: stories,
});

// Persist the reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Export persisted stores
export const persistor = persistStore(store);

export default store;
