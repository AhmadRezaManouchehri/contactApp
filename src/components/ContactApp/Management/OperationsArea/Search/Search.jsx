import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import IconWrapper from "../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { Context } from "../../../../../App";

import styles from "./Search.module.scss";
import { useContext } from "react";

const Search = function () {
    const [states, setStates] = useContext(Context);

    const arrowBackHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            searchByMsg: "search by fullName",
            searchByPhoneNumber: false,
            searchByFullName: true,
            OperationsArea: false,
            searchByEmail: false,
            Preferences: false,
            Operations: true,
            Account: true,
            Search: false,
            Delete: false,
            Filter: true,
            Edit: false,
            Add: false,
        }));
    };

    const searchByFullNameClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            searchByMsg: "search by fullName",
            searchByFullName: true,
        }));
    };

    const searchByEmailClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            searchByMsg: "search by email",
            searchByEmail: true,
        }));
    };

    const searchByPhoneNumberClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            searchByMsg: "search by phoneNumber",
            searchByPhoneNumber: true,
        }));
    };

    const changeHandler = function ({ target }) {
        setStates((prevStates) => ({ ...prevStates, searchBy: target.value }));
    };

    return (
        <div className={styles.search}>
            <IconWrapper
                icon={<HiOutlineArrowNarrowLeft size={18} />}
                clickHandler={arrowBackHandler}
            />

            <div className={styles.searchBy}>
                <IconWrapper
                    clickHandler={searchByFullNameClickHandler}
                    icon={<IoPersonOutline size={18} />}
                />
                <IconWrapper
                    clickHandler={searchByEmailClickHandler}
                    icon={<HiOutlineMail size={18} />}
                />
                <IconWrapper
                    clickHandler={searchByPhoneNumberClickHandler}
                    icon={<HiOutlinePhone size={18} />}
                />
            </div>

            <input
                type="text"
                placeholder={states.searchByMsg}
                onChange={changeHandler}
                value={states.searchBy}
            />

            <button className={styles.searchBtn}>Search</button>
        </div>
    );
};

export default Search;
