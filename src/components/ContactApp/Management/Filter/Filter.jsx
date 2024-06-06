import IconWrapper from "../../../IconWrapper/IconWrapper";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { RiGalleryView2 } from "react-icons/ri";
import styles from "./Filter.module.scss";

const Filter = function () {
    return (
        <div className={styles.Filter}>
            <div className={styles.all}>
                <IconWrapper icon={<RiGalleryView2 size={18} />} />
                <p>All Contacts</p>
            </div>

            <div className={styles.delete}>
                <IconWrapper icon={<AiOutlineDelete size={18} />} />
                <p>Delete Contacts</p>
            </div>

            <div className={styles.favorite}>
                <IconWrapper icon={<MdFavoriteBorder size={18} />} />
                <p>Favorite Contacts</p>
            </div>
        </div>
    );
};

export default Filter;
