import React from "react";
import "./Home.css";

import Navbar from "./Navbar";
import Banner from "./Banner";

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
            </div>
        );
    }
}
export default Home;
