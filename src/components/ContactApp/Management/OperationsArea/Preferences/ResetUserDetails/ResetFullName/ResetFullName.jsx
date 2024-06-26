import { Context } from "../../../../../../../App";
import Input from "../../../../../../Input/Input";
import { useContext, Fragment } from "react";

const ResetFullName = function () {
    const [states, setStates] = useContext(Context);

    const firstNameChangeHandler = function ({ target }) {
        setStates((prevStates) => ({
            ...prevStates,
            firstName: target.value,
            bFirstName: target.value,
        }));
    };

    const lastNameChangeHandler = function ({ target }) {
        setStates((prevStates) => ({
            ...prevStates,
            lastName: target.value,
            bLastName: target.value,
        }));
    };

    return (
        <Fragment>
            <Input
                changeHandler={firstNameChangeHandler}
                placeHolder="Type your first name"
                value={states.firstName}
                title="FirstName"
            />
            <Input
                changeHandler={lastNameChangeHandler}
                placeHolder="Type your last name"
                value={states.lastName}
                title="LastName"
            />
        </Fragment>
    );
};

export default ResetFullName;
