import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from "../../api"

export const donate = createAsyncThunk("donor/donate", async (data, { rejectWithValue }) => {
    try {
        console.log(data, 'popopp');
        const response = await api.donate(data)
        return response.data
    } catch (error) {
        return rejectWithValue("Donation failed: " + error.message)
    }
})

export const donationHistory = createAsyncThunk("donor/donation_history", async (id, { rejectWithValue }) => {
    try {
        console.log(id);
        const response = await api.donationHistory(id)
        console.log(response.data, '2345678');
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const pateintDetails = createAsyncThunk("donor/pateintDetails", async (_, { rejectWithValue }) => {
    try {
        const response = await api.pateintDetails()
        console.log(response.data, '2345678');
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const transfusionDistricts = createAsyncThunk("donor/transfusionDistricts", async (_, { rejectWithValue }) => {
    try {
        const response = await api.transfusionDistricts()
        console.log(response.data, '2345678');
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const getBranches = createAsyncThunk("donor/getBranches", async (value, { rejectWithValue }) => {
    try {
        console.log(value);
        const district = await api.getBranches(value)
        console.log(district);
        return district.data.branchNames
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
