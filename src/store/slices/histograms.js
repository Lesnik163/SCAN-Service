import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { histogramsFetch } from '../../services/objectSearch';
import { objectSearchToSummary } from '../../utils/objectSearchToSummary';

export const getHistogramInfo = createAsyncThunk(
    'getHistogramInfo',
    async (body) => {
        const data = await histogramsFetch(body);
        return objectSearchToSummary(data)

    }
)
export const histogramSlice = createSlice({
    name: 'histogram',
    initialState: {
        histogramInfo: null,
        status:''
    },
    extraReducers: (builder) => {
        builder
        .addCase(getHistogramInfo.pending, (state)=>{
            state.status = 'pending'
        })
        .addCase(getHistogramInfo.fulfilled, (state, action)=> {
            state.histogramInfo=action.payload;
            state.status = 'done';
        })
        .addCase(getHistogramInfo.rejected, (state) => {
            state.status = 'error';
        })
    }
})
export default histogramSlice.reducer