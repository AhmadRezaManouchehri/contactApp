import IconWrapper from "../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { AiOutlineSave } from "react-icons/ai";
import { Context } from "../../../../../App";
import Input from "../../../../Input/Input";
import styles from "./Add.module.scss";
import { useContext } from "react";

const Add = function () {
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

    const phoneNumberChangeHandler = function ({ target }) {
        setStates((prevStates) => ({
            ...prevStates,
            phoneNumber: target.value,
        }));
    };

    const fullNameChangeHandler = function ({ target }) {
        setStates((prevStates) => ({ ...prevStates, fullName: target.value }));
    };

    const emailChangeHandler = function ({ target }) {
        setStates((prevStates) => ({ ...prevStates, email: target.value }));
    };

    const saveClickHandler = function () {
        if (states.phoneNumber && states.fullName && states.email) {
            const data = JSON.parse(
                localStorage.getItem(states.currentActiveAccount)
            );

            localStorage.setItem(
                states.currentActiveAccount,
                JSON.stringify({
                    ...data,
                    contactList: [
                        ...data.contactList,
                        {
                            _id: data.lastID + 1,
                            phoneNumber: states.phoneNumber,
                            fullName: states.fullName,
                            email: states.email,
                        },
                    ],
                    lastID: data.lastID + 1,
                })
            );

            setStates((prevStates) => ({
                ...prevStates,
                phoneNumber: "",
                fullName: "",
                email: "",
            }));
        }
    };

    return (
        <div className={styles.Add}>
            <div className={styles.header}>
                <IconWrapper
                    icon={<HiOutlineArrowNarrowLeft size={18} />}
                    clickHandler={arrowBackHandler}
                />
                <IconWrapper
                    icon={<AiOutlineSave size={18} />}
                    clickHandler={saveClickHandler}
                />
            </div>

            <div className={styles.newContactInfo}>
                <Input
                    changeHandler={phoneNumberChangeHandler}
                    placeHolder="Type your phone number"
                    value={states.phoneNumber}
                    title="PhoneNumber"
                />
                <Input
                    changeHandler={fullNameChangeHandler}
                    placeHolder="Type your full name"
                    value={states.fullName}
                    title="FullName"
                />
                <Input
                    changeHandler={emailChangeHandler}
                    placeHolder="Type your email"
                    value={states.email}
                    title="Email"
                />
            </div>
        </div>
    );
};

export default Add;
