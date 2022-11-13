import {createSlice} from '@reduxjs/toolkit';
// import {toast} from 'react-toastify';

const initialState = {
  isLoading: false,
  allJobs: [],
};

const allJobsSlice = createSlice({
  name: 'AllJobs',
  initialState,
});

export default allJobsSlice.reducer;
