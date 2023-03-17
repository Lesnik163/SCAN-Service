import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { histogramsFetch } from '../../services/objectSearch';
import { publicationFetch } from '../../services/publication';
import { objectSearchToSummary } from '../../utils/objectSearchToSummary';
import { documentsFetch } from '../../services/documents';
import { returnIdsArray } from '../../utils/ReturnIdsArray';

export const getHistogramInfo = createAsyncThunk(
    'getHistogramInfo',
    async (body) => {
        const data = await histogramsFetch(body);
        return objectSearchToSummary(data.data);
    }
)
export const getPublication = createAsyncThunk(
    'getPublication',
    async (body) => {
        const data = await publicationFetch(body);
        return returnIdsArray(data);
    }
)
export const getDocuments = createAsyncThunk(
    'getDocuments',
    async (body) => {
        const data = await documentsFetch(body);
        return data
    }
)
export const histogramSlice = createSlice({
    name: 'histogram',
    initialState: {
        histogramInfo: null,
        status:'',
        publicationIds: [],
        documents: null,
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
        .addCase(getPublication.fulfilled, (state, action)=> {
            state.publicationIds = action.payload;
        })
        .addCase(getDocuments.fulfilled, (state, action)=>{
            state.documents = action.payload;
        })
    }
}) 
export default histogramSlice.reducer