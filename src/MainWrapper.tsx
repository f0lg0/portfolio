import React from "react";
import "./MainWrapper.css";

interface MainWrapperProps {}

interface MainWrapperState {
    isMobile: boolean;
}

class MainWrapper extends React.Component<MainWrapperProps, MainWrapperState> {
    constructor(props: MainWrapperProps) {
        super(props);
        this.state = { isMobile: false };
    }

    render() {
        return <div className="wrapper"></div>;
    }
}

export default MainWrapper;
