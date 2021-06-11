import React from "react";
import "./Footer.css";

interface FooterProps {}
interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="footer border_top">
                <div className="left">
                    <p>© 2021 Leonardo Folgoni</p>
                </div>
                <div className="right">
                    <div className="made_with">
                        <div className="child">
                            <a href="https://github.com/f0lg0/portfolio-dev" target="_blank" rel="noreferrer">
                                Made with React
                            </a>
                        </div>
                        <div className="react_wrapper">
                            <img src="./assets/react.png" alt="React logo" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
