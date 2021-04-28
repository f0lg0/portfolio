import React from "react";
import "./Home.css";

import Navbar from "./Navbar";

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
            </div>
        );
    }
}
export default Home;
