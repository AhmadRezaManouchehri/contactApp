import IconWrapper from "../../../IconWrapper/IconWrapper";
import { IoIosSearch, IoMdAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./Operations.module.scss";
import { Context } from "../../../../App";
import { FiEdit2 } from "react-icons/fi";
import { useContext } from "react";

const Operations = function () {
    const [, setStates] = useContext(Context);

    const addHandler = function () {
        setStates((prevValues) => ({
            ...prevValues,
            OperationsArea: true,
            Preferences: false,
            Operations: false,
            Account: false,
            Filter: false,
            Search: false,
            Delete: false,
            Edit: false,
            Add: true,
        }));
    };

    const searchHandler = function () {
        setStates((prevValues) => ({
            ...prevValues,
            OperationsArea: true,
            Preferences: false,
            Operations: false,
            Account: false,
            Filter: false,
            Delete: false,
            Search: true,
            Edit: false,
            Add: false,
        }));
    };

    const deleteHandler = function () {
        setStates((prevValues) => ({
            ...prevValues,
            OperationsArea: true,
            Preferences: false,
            Operations: false,
            Account: false,
            Filter: false,
            Search: false,
            Delete: true,
            Edit: false,
            Add: false,
        }));
    };

    const editHandler = function () {
        setStates((prevValues) => ({
            ...prevValues,
            OperationsArea: true,
            Preferences: false,
            Operations: false,
            Account: false,
            Filter: false,
            Delete: false,
            Search: false,
            edit: true,
            Add: false,
            Edit: true,
        }));
    };

    return (
        <div className={styles.Operations}>
            <IconWrapper
                icon={<IoMdAdd size={18} />}
                clickHandler={addHandler}
            />
            <IconWrapper
                icon={<IoIosSearch size={18} />}
                clickHandler={searchHandler}
            />
            <IconWrapper
                icon={<AiOutlineDelete size={18} />}
                clickHandler={deleteHandler}
            />
            <IconWrapper
                icon={<FiEdit2 size={18} />}
                clickHandler={editHandler}
            />
        </div>
    );
};

export default Operations;
