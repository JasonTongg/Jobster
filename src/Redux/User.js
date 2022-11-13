import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const initialState = {
  isLoading: false,
  user: [],
};

const userSlice = createSlice({
  name: 'User',
  initialState,
});

export default userSlice.reducer;
