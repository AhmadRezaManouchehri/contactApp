import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import IconWrapper from "../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { Context } from "../../../../../App";
import { MdNumbers } from "react-icons/md";
import styles from "./Delete.module.scss";
import { useContext } from "react";

const Delete = function () {
    const [states, setStates] = useContext(Context);

    const arrowBackHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            deleteByMsg: "delete by ID",
            deleteByPhoneNumber: false,
            deleteByFullName: false,
            OperationsArea: false,
            deleteByEmail: false,
            Preferences: false,
            deleteById: true,
            Operations: true,
            deleteBy: "",
            Account: true,
            Search: false,
            Delete: false,
            Filter: true,
            Edit: false,
            Add: false,
        }));
    };

    const deleteByIdClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            deleteByMsg: "delete by ID",
            deleteById: true,
        }));
    };

    const deleteByFullNameClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            deleteByMsg: "delete by fullName",
            deleteByFullName: true,
        }));
    };

    const deleteByEmailClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            deleteByMsg: "delete by email",
            deleteByEmail: true,
        }));
    };

    const deleteByPhoneNumberClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            deleteByMsg: "delete by phoneNumber",
            deleteByPhoneNumber: true,
        }));
    };

    const changeHandler = function ({ target }) {
        setStates((prevStates) => ({ ...prevStates, deleteBy: target.value }));
    };

    return (
        <div className={styles.delete}>
            <IconWrapper
                icon={<HiOutlineArrowNarrowLeft size={18} />}
                clickHandler={arrowBackHandler}
            />

            <div className={styles.deleteBy}>
                <IconWrapper
                    clickHandler={deleteByIdClickHandler}
                    icon={<MdNumbers size={18} />}
                />

                <IconWrapper
                    clickHandler={deleteByFullNameClickHandler}
                    icon={<IoPersonOutline size={18} />}
                />
                <IconWrapper
                    clickHandler={deleteByEmailClickHandler}
                    icon={<HiOutlineMail size={18} />}
                />
                <IconWrapper
                    clickHandler={deleteByPhoneNumberClickHandler}
                    icon={<HiOutlinePhone size={18} />}
                />
            </div>

            <input
                placeholder={states.deleteByMsg}
                onChange={changeHandler}
                value={states.deleteBy}
                type="text"
            />

            <button className={styles.delBtn}>Delete</button>
        </div>
    );
};

export default Delete;
