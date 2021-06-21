import styles from "../../styles/Footer.Mobile.module.css";

export default function Footer() {
    return (
        <div className={styles.footer + " " + styles.border_top}>
            <p>© 2021 Leonardo Folgoni</p>
        </div>
    );
}
