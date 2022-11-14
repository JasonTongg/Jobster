import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import CustomFetch from '../Utils/CustomFetch';

const initialState = {
  isLoading: false,
  allJobs: [],
  pages: 1,
  filter: {
    status: 'all',
    type: 'all',
    sort: 'latest',
    page: 1,
    search: '',
  },
};

export const getJobs = createAsyncThunk(
  'job/getAll',
  async ({status, type, sort, page, search}, thunkAPI) => {
    try {
      let res = await CustomFetch.get(
        `/jobs?status=${status}&jobType=${type}&sort=${sort}&page=${page}&search=${search}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const allJobsSlice = createSlice({
  name: 'AllJobs',
  initialState,
  extraReducers: {
    [getJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getJobs.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.allJobs = payload.jobs;
      state.pages = payload.numOfPages;
    },
    [getJobs.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default allJobsSlice.reducer;
