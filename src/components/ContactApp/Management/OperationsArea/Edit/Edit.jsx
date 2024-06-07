import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import IconWrapper from "../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { Context } from "../../../../../App";
import { MdNumbers } from "react-icons/md";
import styles from "./Edit.module.scss";
import { useContext } from "react";

const Edit = function () {
    const [states, setStates] = useContext(Context);

    const arrowBackHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            editByPhoneNumber: false,
            editByMsg: "edit by ID",
            editByFullName: false,
            OperationsArea: false,
            editByEmail: false,
            Preferences: false,
            Operations: true,
            editById: true,
            Account: true,
            Search: false,
            Delete: false,
            Filter: true,
            Edit: false,
            Add: false,
            editBy: "",
        }));
    };

    const editByIdClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            editByMsg: "edit by ID",
            editById: true,
        }));
    };

    const editByFullNameClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            editByMsg: "edit by fullName",
            editByFullName: true,
        }));
    };

    const editByEmailClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            editByMsg: "edit by email",
            editByEmail: true,
        }));
    };

    const editByPhoneNumberClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            editByMsg: "edit by phoneNumber",
            editByPhoneNumber: true,
        }));
    };

    const changeHandler = function ({ target }) {
        setStates((prevStates) => ({ ...prevStates, deleteBy: target.value }));
    };

    return (
        <div className={styles.edit}>
            <IconWrapper
                icon={<HiOutlineArrowNarrowLeft size={18} />}
                clickHandler={arrowBackHandler}
            />

            <div className={styles.editBy}>
                <IconWrapper
                    clickHandler={editByIdClickHandler}
                    icon={<MdNumbers size={18} />}
                />

                <IconWrapper
                    clickHandler={editByFullNameClickHandler}
                    icon={<IoPersonOutline size={18} />}
                />
                <IconWrapper
                    clickHandler={editByEmailClickHandler}
                    icon={<HiOutlineMail size={18} />}
                />
                <IconWrapper
                    clickHandler={editByPhoneNumberClickHandler}
                    icon={<HiOutlinePhone size={18} />}
                />
            </div>

            <input
                placeholder={states.editByMsg}
                onChange={changeHandler}
                value={states.editBy}
                type="text"
            />

            <button className={styles.editBtn}>Edit</button>
        </div>
    );
};

export default Edit;
