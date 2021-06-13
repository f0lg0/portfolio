import { directive } from "@babel/types";
import React from "react";

import HomeDesktop from "./components/desktop/Home";
import HomeMobile from "./components/mobile/Home";

interface MainWrapperProps {}

interface MainWrapperState {
    isMobile: boolean;
}

class MainWrapper extends React.Component<MainWrapperProps, MainWrapperState> {
    constructor(props: MainWrapperProps) {
        super(props);
        this.state = { isMobile: false };
        this.checkScreenSize = this.checkScreenSize.bind(this);
    }

    checkScreenSize() {
        const screenWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        console.log(screenWidth <= 760 ? true : false);

        this.setState({ isMobile: screenWidth <= 760 ? true : false });
    }
    componentDidMount() {
        this.checkScreenSize();
        window.addEventListener("resize", this.checkScreenSize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.checkScreenSize);
    }

    render() {
        return <div className="wrapper">{this.state.isMobile ? <HomeMobile /> : <HomeDesktop />}</div>;
    }
}

export default MainWrapper;
