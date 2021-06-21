import styles from "../../styles/Home.Mobile.module.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import BodySection from "./BodySection";

export default function HomeMobile() {
    return (
        <div className={styles.home}>
            <Navbar />
            <Banner />
            <BodySection />
        </div>
    );
}
