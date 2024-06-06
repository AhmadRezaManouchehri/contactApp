import IconWrapper from "../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Context } from "../../../../../App";
import styles from "./Edit.module.scss";
import { useContext } from "react";

const Edit = function () {
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
        <div className={styles.Edit}>
            <IconWrapper icon={<HiOutlineArrowNarrowLeft size={18} />} clickHandler={arrowBackHandler} />
        </div>
    );
};

export default Edit;
