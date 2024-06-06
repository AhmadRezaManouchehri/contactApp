import OperationsArea from "./OperationsArea/OperationsArea";
import Operations from "./Operations/Operations";
import styles from "./Management.module.scss";
import Account from "./Account/Account";
import { Context } from "../../../App";
import Filter from "./Filter/Filter";
import { useContext } from "react";

const Management = function () {
    const [states] = useContext(Context);

    return (
        <div className={styles.Management}>
            {states.OperationsArea && <OperationsArea />}
            {states.Operations && <Operations />}
            {states.Filter && <Filter />}
            {states.Account && <Account />}
        </div>
    );
};

export default Management;
