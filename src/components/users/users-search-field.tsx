import React, {ChangeEvent, KeyboardEvent} from "react";
import css from "./../styles/style.module.css";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store/store";
import {getAllUsersAsyncThunk, setNewSearchValue} from "../../store/features/users-slice";

const UsersSearchField = () => {
    const dispatch = useAppDispatch();
    const searchValue = useSelector((state: RootState) => state.users.vars.searchValue);
    const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(setNewSearchValue(e.currentTarget.value));
    const searchButtonClick = () => dispatch(getAllUsersAsyncThunk(searchValue));
    const onSearchValueEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter")
            dispatch(getAllUsersAsyncThunk(searchValue));
    }

    return (
        <div className={css.search_div}>
            <input
                type={'text'}
                className={css.search_field}
                value={searchValue}
                onChange={(e) => onSearchValueChange(e)}
                onKeyPress={(e) => onSearchValueEnterPress(e)}
            />
            <button
                className={css.search_button}
                onClick={searchButtonClick}></button>
        </div>
    )
}

export default UsersSearchField;