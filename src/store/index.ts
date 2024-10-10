import { configureStore } from '@reduxjs/toolkit';
import speakerReducer from './speakerSlice';

const store = configureStore({
  reducer: {
    speakers: speakerReducer,
    // other reducers...
  },
});

export default store;