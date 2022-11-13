import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Toast} from 'react-toastify/dist/components';

const initialState = {
  isLoading: false,
  allJobs: [],
};

const allJobsSlice = createSlice({
  name: 'AllJobs',
  initialState,
});

export default allJobsSlice.reducer;
