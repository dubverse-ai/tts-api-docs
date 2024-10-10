import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSpeakers } from '../services/speakerService';

export const getSpeakers = createAsyncThunk(
  'speakers/getSpeakers',
  async (_, { rejectWithValue }) => {
    try {
      const speakers = await fetchSpeakers();
      return speakers;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const speakerSlice = createSlice({
  name: 'speakers',
  initialState: {
    speakers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpeakers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSpeakers.fulfilled, (state, action) => {
        state.loading = false;
        state.speakers = action.payload;
      })
      .addCase(getSpeakers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default speakerSlice.reducer;