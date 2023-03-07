import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginFetch } from '../../services/auth'
import { profileFetch } from '../../services/profile'

export const getCompanyInfo = createAsyncThunk(
    'getCompanyInfo',
    async () => {
        const data = await profileFetch()
        return data
    }
)
export const signIn = createAsyncThunk(
    'signIn',
    async (data) => {
        const profResponse = await loginFetch(data)
        localStorage.setItem('accessToken', profResponse.accessToken)
        return profResponse
    }
)
export const profile = createSlice({
    name: 'profile',
    initialState: {
        companyInfo: null,
        accountInfo: null,
        status: ''
    },
    reducers: {
        signOut: (state) => {
            state.accountInfo = null;
            localStorage.removeItem('accessToken')
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(signIn.pending, (state)=>{
            state.status = 'pending'
        })
        .addCase(signIn.fulfilled, (state, action)=> {
            state.accountInfo=action.payload;
            state.status = 'done';
        })
        .addCase(getCompanyInfo.pending, (state)=>{
            state.status = 'pending'
        })
        .addCase(getCompanyInfo.fulfilled, (state, action)=> {
            state.companyInfo=action.payload;
            state.status = 'done';
        })
    }
  })
  
  export const {signOut} = profile.actions
  export default profile.reducer
