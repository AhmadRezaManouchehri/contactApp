import IconWrapper from "../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Context } from "../../../../../App";
import styles from "./Search.module.scss";
import { useContext } from "react";

const Search = function () {
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
        <div className={styles.Search}>
            <IconWrapper icon={<HiOutlineArrowNarrowLeft size={18} />} clickHandler={arrowBackHandler} />
        </div>
    );
};

export default Search;
