import styles from "./baseButton.module.css"
import { Link } from "react-router"

export default function BaseButton({title, location}) {
    return(
        <div className={styles.button}>
            <Link to={location}><p>{title}</p></Link>
        </div>
    )
}
