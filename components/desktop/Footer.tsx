import styles from "../../styles/Footer.Desktop.module.css";

export default function Footer() {
    return (
        <div className={styles.footer + " " + styles.border_top}>
            <div className={styles.left}>
                <p>© 2021 Leonardo Folgoni</p>
            </div>
            <div className={styles.right}>
                <div className={styles.made_with}>
                    <div className={styles.child}>
                        <a href="https://github.com/f0lg0/portfolio-dev" target="_blank" rel="noreferrer">
                            Made with React
                        </a>
                    </div>
                    <div className={styles.react_wrapper}>
                        <img src="./react.png" alt="React logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}
