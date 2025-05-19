import { NavBar } from "../NavBar"
import styles from "./HeaderContent.module.scss"

export const HeaderContent = () => {
    return (
        <header className={styles.header__content}>
            <NavBar />
        </header>
    )
}