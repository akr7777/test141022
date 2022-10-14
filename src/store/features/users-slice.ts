import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'
import {usersAPI} from "../../components/api/users-api";

export type UserType = {
    "name": string,
    "phone": string,
    "email": string,
    "address": string,
    "position_name": string,
    "department": string,
    "hire_date": string
}
type VarsType = {
    searchValue: string,
    isLoading: boolean,
}
type UserInitStateType = {
    users: Array<UserType>,
    showUser: UserType | null,
    vars: VarsType,
}
const usersInitState:UserInitStateType = {
    users: [],
    showUser: null,
    vars: {
        searchValue: "",
        isLoading: true,
    },
}

export const getAllUsersAsyncThunk = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (searchQuery: string, {rejectWithValue, dispatch}) => {
        const res = await usersAPI.getAllUsers(searchQuery);
        return res.data;
    }
)

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: usersInitState,
    reducers: {
        setShowUserAC: (state: UserInitStateType, action: PayloadAction<UserType | null>) => {
            if (action.payload)
                state.showUser = {...action.payload}
            else
                state.showUser = action.payload
        },
        setNewSearchValue: (state: UserInitStateType, action: PayloadAction<string>) => {
            state.vars = {...state.vars, searchValue: action.payload}
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getAllUsersAsyncThunk.pending, (state: UserInitStateType) => {
            state.vars = {...state.vars, isLoading: true}
        })
        builder.addCase(getAllUsersAsyncThunk.fulfilled, (state: UserInitStateType, action: PayloadAction<UserType[]>) => {
            state.users = [...action.payload];
            state.vars = {...state.vars, isLoading: false}
        })
        builder.addCase(getAllUsersAsyncThunk.rejected, (state: UserInitStateType) => {
            state.vars = {...state.vars, isLoading: true}
        })
    }
})

export const {setShowUserAC, setNewSearchValue} = usersSlice.actions;

export default usersSlice.reducer;