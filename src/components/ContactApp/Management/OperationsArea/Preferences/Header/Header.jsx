import IconWrapper from "../../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Context } from "../../../../../../App";
import { AiOutlineSave } from "react-icons/ai";
import styles from "./Header.module.scss";
import { useContext } from "react";

const Header = function () {
    const [states, setStates] = useContext(Context);

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

    const saveClickHandler = function () {
        if (states.changePasswordClicked) {
            const currentPassword = JSON.parse(
                localStorage.getItem(states.currentActiveAccount)
            ).password;

            if (
                !(
                    states.currentPassword &&
                    states.newPassword &&
                    states.retypeNewPassword
                )
            ) {
                return;
            }

            if (!(states.currentPassword === currentPassword)) {
                setStates((prevStates) => ({
                    ...prevStates,
                    currentPasswordNotMatch: true,
                }));

                setTimeout(() => {
                    setStates((prevStates) => ({
                        ...prevStates,
                        currentPasswordNotMatch: false,
                    }));
                }, 1e3);

                return;
            }

            if (!(states.newPassword === states.retypeNewPassword)) {
                setStates((prevStates) => ({
                    ...prevStates,
                    newPasswordNotMatch: true,
                }));

                setTimeout(() => {
                    setStates((prevStates) => ({
                        ...prevStates,
                        newPasswordNotMatch: false,
                    }));
                }, 1e3);

                return;
            }

            localStorage.setItem(
                states.currentActiveAccount,
                JSON.stringify({
                    ...JSON.parse(
                        localStorage.getItem(states.currentActiveAccount)
                    ),
                    password: states.bNewPassword,
                })
            );

            setStates((prevStates) => ({
                ...prevStates,
                changeFullNameClicked: false,
                changePasswordClicked: false,
                ResetUserDetails: false,
                retypeNewPassword: "",
                ResetFullName: false,
                currentPassword: "",
                ResetPassword: "",
                UserDetails: true,
                newPassword: "",
                arrowBack: true,
                firstName: "",
                lastName: "",
                save: false,
            }));
        }

        if (states.changeFullNameClicked) {
            if (!(states.firstName && states.lastName)) {
                return;
            }

            localStorage.setItem(
                states.currentActiveAccount,
                JSON.stringify({
                    ...JSON.parse(
                        localStorage.getItem(states.currentActiveAccount)
                    ),
                    firstName: states.bFirstName,
                    lastName: states.bLastName,
                })
            );

            setStates((prevStates) => ({
                ...prevStates,
                changeFullNameClicked: false,
                changePasswordClicked: false,
                ResetUserDetails: false,
                retypeNewPassword: "",
                ResetFullName: false,
                currentPassword: "",
                ResetPassword: "",
                UserDetails: true,
                newPassword: "",
                arrowBack: true,
                firstName: "",
                lastName: "",
                save: false,
            }));
        }
    };

    return (
        <div className={styles.header}>
            {states.arrowBack && (
                <IconWrapper
                    icon={<HiOutlineArrowNarrowLeft size={18} />}
                    clickHandler={arrowBackHandler}
                />
            )}

            {states.save && (
                <IconWrapper
                    icon={<AiOutlineSave size={18} />}
                    clickHandler={saveClickHandler}
                />
            )}
        </div>
    );
};

export default Header;
