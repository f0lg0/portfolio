import React from "react";
import "./Banner.css";

interface BannerProps {}
interface BannerState {}

class Banner extends React.Component<BannerProps, BannerState> {
    constructor(props: BannerProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="banner_mobile">
                <div className="big_logo fade-in-image">
                    <img src="./assets/logo.png" alt="LF" />
                </div>
                <div className="intro">
                    <div className="top_bar">
                        <div className="side_line"></div>
                        <div className="myname">
                            <p>Leonardo Folgoni</p>
                        </div>
                    </div>
                    <div className="intro_text">
                        <h1>
                            I'm <span>f0lg0</span>,
                        </h1>
                        <p>a self taught software developer.</p>
                    </div>

                    <div className="arrow_wrapper">
                        <div className="arrow"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
