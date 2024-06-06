import ContactList from "../ContactList/ContactList";
import Management from "../Management/Management";
import styles from "./Container.module.scss";
import { Fragment, useContext } from "react";
import { Context } from "../../../App";
import Modal from "../../Modal/Modal";

const Container = function () {
    const [states] = useContext(Context);

    return (
        <Fragment>
            {states.logoutModal && (
                <Modal
                    msg="Are you suer you want to log out?"
                    action="logout"
                />
            )}

            {states.deleteAccountModal && (
                <Modal
                    msg="Are you suer you want to delete your account?"
                    action="deleteAccount"
                />
            )}

            <div className={styles.Container}>
                <Management />
                <ContactList />
            </div>
        </Fragment>
    );
};

export default Container;
