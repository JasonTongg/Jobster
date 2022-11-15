import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import CustomFetch from '../Utils/CustomFetch';
import {getJobs} from './AllJobs';

const initialState = {
  isLoading: false,
  editJob: null,
};

export const addJob = createAsyncThunk('job/add', async (job, thunkAPI) => {
  try {
    let res = await CustomFetch.post('/jobs', job);
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

export const editJobs = createAsyncThunk(
  'job/edit',
  async ({jobId, job}, thunkAPI) => {
    try {
      let res = await CustomFetch.patch(`/jobs/${jobId}`, job);
      thunkAPI.dispatch(getJobs());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const deleteJobs = createAsyncThunk(
  'job/delete',
  async (job, thunkAPI) => {
    try {
      let res = await CustomFetch.delete(`/jobs/${job}`);
      thunkAPI.dispatch(getJobs(thunkAPI.getState().AllJobs.filter));
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const jobSlice = createSlice({
  name: 'Job',
  initialState,
  reducers: {
    editJob: (state, {payload}) => {
      state.editJob = payload;
    },
  },
  extraReducers: {
    [addJob.pending]: (state) => {
      state.isLoading = true;
    },
    [addJob.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      toast.success('Create job success');
    },
    [addJob.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteJobs.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      toast.success(payload.msg);
    },
    [deleteJobs.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [editJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [editJobs.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      toast.success('Edit Success');
    },
    [editJobs.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {editJob} = jobSlice.actions;
export default jobSlice.reducer;
