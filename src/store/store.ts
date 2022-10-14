import {configureStore, ThunkDispatch, AnyAction} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import usersSlice from "./features/users-slice";

export const store = configureStore({
    reducer: {
        users: usersSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();