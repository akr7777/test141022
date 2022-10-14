import css from "./../styles/style.module.css";
import UsersSimpleCard from "./users-simple-card";
import {getAllUsersAsyncThunk, UserType} from "../../store/features/users-slice";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store/store";
import {useEffect} from "react";
import Preloader from "../preloader/preloader";

const UsersAlbum = () => {
    const dispatch = useAppDispatch();
    const isloading: boolean = useSelector((state: RootState) => state.users.vars.isLoading);
    const searchValue = useSelector((state: RootState) => state.users.vars.searchValue);

    useEffect(() => {
        dispatch(getAllUsersAsyncThunk(searchValue));
    }, []);

    const users: Array<UserType> = useSelector((state: RootState) => state.users.users);

    return <>
        {
            isloading
                ? <Preloader/>
                : <div className={css.users_album_div}>
                    {
                        users.map((user, index) => {
                            return <UsersSimpleCard
                                key={index}
                                user={user}
                            />
                        })
                    }
                </div>
        }
    </>

}

export default UsersAlbum;