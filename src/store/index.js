import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/app';

export default configureStore({
  reducer: {app:appSlice}
})