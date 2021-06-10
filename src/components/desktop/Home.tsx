import React from "react";
import "./Home.css";

import Navbar from "./Navbar";
import Banner from "./Banner";
import BodySection from "./BodySection";
import Footer from "./Footer";

interface HomeProps {}
interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="home">
                <Navbar />
                <Banner />
                <BodySection />
                <Footer />
            </div>
        );
    }
}
export default Home;
