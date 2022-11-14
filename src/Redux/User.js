import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import CustomFetch from '../Utils/CustomFetch';
import {
  AddToLocalStorage,
  RemoveLocalStorage,
  GetLocalStorage,
} from '../Utils/LocalStorage';

const initialState = {
  isLoading: false,
  user: GetLocalStorage() || null,
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

export const updateUser = createAsyncThunk(
  'user/update',
  async (user, thunkAPI) => {
    try {
      const res = await CustomFetch.patch('/auth/updateUser', user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    userLogout: (state) => {
      state.user = null;
      RemoveLocalStorage();
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [userLogin.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.user = payload.user;
      AddToLocalStorage(payload.user);
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
      AddToLocalStorage(payload.user);
      toast.success('Register Success');
    },
    [userRegister.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.user = payload.user;
      AddToLocalStorage(payload.user);
      toast.success('Update Profile Success');
    },
    [updateUser.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {userLogout} = userSlice.actions;
export default userSlice.reducer;
