import styles from "../../styles/Banner.Desktop.module.css";
import Image from "next/image";

function routeDown() {
    window.location.href = "/#About";
}

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.main_wrapper}>
                <div className={styles.text_region}>
                    <div className={styles.text_wrapper}>
                        <div className={styles.title}>
                            <h1>
                                I&apos;m <span>f0lg0</span>,
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
                        <div className={styles.main_btn} onClick={routeDown}>
                            <p>About me</p>
                        </div>
                    </div>
                </div>
                <div className={styles.logo_region}>
                    <div className={styles.logo_region_img}>
                        <Image src="/logo.png" alt="FL LOGO" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}
