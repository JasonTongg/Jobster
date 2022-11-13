import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Toast} from 'react-toastify/dist/components';

const initialState = {
  isLoading: false,
  user: [],
};

const userSlice = createSlice({
  name: 'User',
  initialState,
});

export default userSlice.reducer;
