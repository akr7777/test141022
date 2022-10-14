import css from "./../styles/style.module.css";
import {setShowUserAC, UserType} from "../../store/features/users-slice";
import closeImage from "../../images/icons/close.png";
import {useAppDispatch} from "../../store/store";

const UserInfo = (props: { userInfo: UserType }) => {
    const dispatch = useAppDispatch();
    return <div className={css.user_info_div}>

        <div className={css.user_info_inner_div_1}>
            <img
                src={closeImage}
                className={css.close_icon_img}
                onClick={() => dispatch(setShowUserAC(null))}
            />
            <h3>{props.userInfo.name}</h3>
        </div>

        <div className={css.user_info_inner_div_2}>
            <table cellPadding={10} className={css.table_style}>
                <tbody>
                <tr>
                    <td>Телефон:</td>
                    <td>
                        <div className={css.table_cell_style}>
                            <a href={"tel:" + props.userInfo.phone}
                               className={css.click_links}>{props.userInfo.phone}</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Почта:</td>
                    <td>
                        <div className={css.table_cell_style}>
                            <a href={"mailto:" + props.userInfo.email}
                               className={css.click_links}>{props.userInfo.email}</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Дата приема:</td>
                    <td>
                        <div className={css.table_cell_style}>
                            {props.userInfo.hire_date}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Должность:</td>
                    <td>
                        <div className={css.table_cell_style}>
                            {props.userInfo.position_name}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Подразделение:</td>
                    <td>
                        <div className={css.table_cell_style}>
                            {props.userInfo.department}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className={css.user_info_inner_div_3}>
            <div><b>Дополнительная информация:</b></div>
            <div className={css.user_info_inner_div_3_1}>Адрес: {props.userInfo.address}</div>
        </div>

    </div>
}

export default UserInfo;