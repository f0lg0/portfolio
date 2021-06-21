import styles from "../../styles/Banner.Desktop.module.css";

function routeToProjects() {
    window.location.href = "/#Projects";
}

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.main_wrapper}>
                <div className={styles.text_region}>
                    <div className={styles.text_wrapper}>
                        <div className={styles.title}>
                            <h1>
                                I'm <span>f0lg0</span>,
                            </h1>
                        </div>
                        <div className={styles.subtitle}>
                            <h2>
                                a self-taught <span>software developer</span>
                            </h2>
                        </div>
                        <div className={styles.small_text}>
                            <p>Stick around to see my work</p>
                        </div>
                        <div className={styles.main_btn} onClick={routeToProjects}>
                            <p>See my work</p>
                        </div>
                    </div>
                </div>
                <div className={styles.logo_region}>
                    <img src="/logo.png" alt="FL LOGO" />
                </div>
            </div>
        </div>
    );
}
