import styles from "../../styles/Home.Desktop.module.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import BodySection from "./BodySection";
import Footer from "./Footer";

export default function HomeDesktop() {
    return (
        <div className={styles.home}>
            <Navbar />
            <Banner />
            <BodySection />
            <Footer />
        </div>
    );
}
