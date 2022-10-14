import css from "./../styles/style.module.css";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import {setShowUserAC, UserType} from "../../store/features/users-slice";
import {useAppDispatch} from "../../store/store";

const UsersSimpleCard = (props: {user: UserType}) => {
    const dispatch = useAppDispatch();
    return (
        <div
            className={css.user_simple_card_div}
            onClick={() => dispatch(setShowUserAC({...props.user}))}
        >
            <div>
                <label><b>{props.user.name}</b></label>
            </div>
            <div className={css.phone_email_div_1}>
                <div className={css.phone_email_div_2}>
                    <SmartphoneIcon className={css.small_icon_style}/>
                    <label>{props.user.phone}</label>
                </div>
                <div className={css.phone_email_div_2}>
                    <EmailIcon className={css.small_icon_style}/>
                    <label>{props.user.email}</label>
                </div>
            </div>
        </div>
    )
}

export default UsersSimpleCard;