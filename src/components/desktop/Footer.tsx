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
                <div className="right"></div>
            </div>
        );
    }
}

export default Footer;
