import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const initialState = {
  isLoading: false,
  job: null,
};

const jobSlice = createSlice({
  name: 'Job',
  initialState,
});

export default jobSlice.reducer;
