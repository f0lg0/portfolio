import React from "react";
import "./Home.css";

interface HomeProps {}
interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="home_mobile"></div>;
    }
}
export default Home;
