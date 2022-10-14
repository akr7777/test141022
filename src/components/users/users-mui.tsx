import React from "react";
import css from "../styles/style.module.css";
import UsersSearchField from "./users-search-field";
import UsersAlbum from "./users-album";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {UserType} from "../../store/features/users-slice";
import UserInfo from "./users-user-info";

const UsersMUI = () => {
    const userInfo: UserType | null = useSelector((state: RootState) => state.users.showUser);

    return <>
        { userInfo && <div className={css.shadow_div}></div> }

        { userInfo && <UserInfo userInfo={userInfo}/> }

        <div className={css.main_container}>
            <UsersSearchField />
            <UsersAlbum/>
        </div>
    </>
}

export default UsersMUI