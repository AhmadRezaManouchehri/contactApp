import WithNoContacts from "./WithNoContacts/WithNoContacts";
import WithContacts from "./WithContacts/WithContacts";
import { Context } from "../../../App";
import { useContext } from "react";

const ContactList = function () {
    const [states] = useContext(Context);

    return !JSON.parse(localStorage.getItem(states.currentActiveAccount))
        .contactList.length ? (
        <WithNoContacts />
    ) : (
        <WithContacts />
    );
};

export default ContactList;
