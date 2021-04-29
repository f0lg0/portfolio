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
        return <div className="banner"></div>;
    }
}

export default Banner;
