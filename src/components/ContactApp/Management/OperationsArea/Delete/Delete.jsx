import IconWrapper from "../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Context } from "../../../../../App";
import styles from "./Delete.module.scss";
import { useContext } from "react";

const Delete = function () {
    const [, setStates] = useContext(Context);

    const arrowBackHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            OperationsArea: false,
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

    return (
        <div className={styles.Delete}>
            <IconWrapper icon={<HiOutlineArrowNarrowLeft size={18} />} clickHandler={arrowBackHandler} />
        </div>
    );
};

export default Delete;
