import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";
import axios from "axios"

const initialState = {
    isLoading : true,
    classes : null,
    singleclass : null,
    error : false,
    status : null,
    classanalytics : null
}

const tutorSlice = createSlice({
    name : 'tutor',
    initialState
})

export default tutorSlice.reducer