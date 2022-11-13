import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Toast} from 'react-toastify/dist/components';

const initialState = {
  isLoading: false,
  job: null,
};

const jobSlice = createSlice({
  name: 'Job',
  initialState,
});

export default jobSlice.reducer;
