import styles from "./baseButton.module.css"
import { Link } from "react-router"

export default function BaseButton({title, location}) {
    return(
        <Link to={location} className={styles.button}>
            <p>{title}</p>
        </Link>
    )
}
