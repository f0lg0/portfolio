import React from "react";
import "./Banner.css";

interface BannerProps {}
interface BannerState {}

class Banner extends React.Component<BannerProps, BannerState> {
    constructor(props: BannerProps) {
        super(props);
        this.state = {};
    }

    routeToProjects() {
        window.location.href = "/#Projects";
    }

    render() {
        return (
            <div className="banner">
                <div className="main_wrapper">
                    <div className="text_region">
                        <div className="text_wrapper">
                            <div className="title">
                                <h1>
                                    I'm <span>f0lg0</span>,
                                </h1>
                            </div>
                            <div className="subtitle">
                                <h2>
                                    a self-taught <span>software developer</span>
                                </h2>
                            </div>
                            <div className="small_text">
                                <p>Stick around to see my work</p>
                            </div>
                            <div className="main_btn" onClick={this.routeToProjects}>
                                <p>See my work</p>
                            </div>
                        </div>
                    </div>
                    <div className="logo_region">
                        <img src="./assets/logo.png" alt="FL LOGO" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
