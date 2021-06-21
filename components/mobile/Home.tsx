import styles from "../../styles/Home.Mobile.module.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import BodySection from "./BodySection";
import Footer from "./Footer";

import React, { useState } from "react";

export default function HomeMobile() {
    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
        <div className={styles.home}>
            <Navbar onOpen={(open: boolean) => setBurgerOpen(open)} />

            <main style={burgerOpen ? { display: "none" } : { display: "block" }}>
                <Banner />
                <BodySection />
                <Footer />
            </main>
        </div>
    );
}
