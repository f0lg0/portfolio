import styles from "../../styles/Footer.Desktop.module.css";
import Image from "next/image";

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
                        <Image src="/react.png" alt="React logo" width={100} height={80} />
                    </div>
                </div>
            </div>
        </div>
    );
}
