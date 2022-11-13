import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import {CustomFetch} from '../Utils/CustomFetch';
import {AddToLocalStorage} from '../Utils/LocalStorage';

const initialState = {
  isLoading: false,
  user: [],
};

export const userLogin = createAsyncThunk(
  'user/login',
  async (user, thunkAPI) => {
    try {
      const res = await CustomFetch.post('/auth/login', user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const userRegister = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      const res = await CustomFetch.post('/auth/register', user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: 'User',
  initialState,
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [userLogin.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.user = payload.user;
      AddToLocalStorage(payload.user.token);
      toast.success('Login Success');
    },
    [userLogin.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [userRegister.pending]: (state) => {
      state.isLoading = true;
    },
    [userRegister.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.user = payload.user;
      AddToLocalStorage(payload.user.token);
      toast.success('Register Success');
    },
    [userRegister.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default userSlice.reducer;
