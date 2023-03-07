import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/app';
import profileSlice from './slices/profile'
export default configureStore({
  reducer: {
    app:appSlice,
    profile:profileSlice,
  }
})