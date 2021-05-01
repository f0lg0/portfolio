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
                        <svg width="166" height="202" viewBox="0 0 166 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.95148 60.3V77.25H53.6015V104.1H20.1515V120.75H53.6015V165H74.6015V60.3H9.95148Z" fill="#F2F2F2" />
                            <path d="M112.398 148.35H146.898V165H91.3985V60.3H112.398V148.35Z" fill="#5A92E1" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
