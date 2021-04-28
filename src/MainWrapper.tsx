import React from "react";

import HomeDesktop from "./components/desktop/Home";

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

        this.setState({ isMobile: screenWidth <= 760 ? true : false });
    }
    componentDidMount() {
        window.addEventListener("resize", this.checkScreenSize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.checkScreenSize);
    }

    render() {
        return (
            <div className="wrapper">
                {this.state.isMobile ? (
                    <div>
                        <p>Mobile</p>
                    </div>
                ) : (
                    <HomeDesktop />
                )}
            </div>
        );
    }
}

export default MainWrapper;
