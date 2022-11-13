import {configureStore} from '@reduxjs/toolkit';
import User from './User';
import Job from './Job';
import AllJobs from './AllJobs';

export const Store = configureStore({
  reducer: {
    User,
    Job,
    AllJobs,
  },
});
