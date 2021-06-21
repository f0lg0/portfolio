import styles from "../../styles/Banner.Mobile.module.css";

export default function Banner() {
    return (
        <div className={styles.banner_mobile}>
            <div className={styles.big_logo + " " + styles.fade_in_image}>
                <img src="/logo.png" alt="LF" />
            </div>
            <div className={styles.intro}>
                <div className={styles.top_bar}>
                    <div className={styles.side_line}></div>
                    <div className={styles.myname}>
                        <p>Leonardo Folgoni</p>
                    </div>
                </div>
                <div className={styles.intro_text}>
                    <h1>
                        I'm <span>f0lg0</span>,
                    </h1>
                    <p>a self taught software developer.</p>
                </div>

                <div className={styles.arrow_wrapper}>
                    <div className={styles.arrow}></div>
                </div>
            </div>
        </div>
    );
}
