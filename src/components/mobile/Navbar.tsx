import React from "react";
import "./Navbar.css";

interface NavbarProps {}
interface NavbarState {
    open: boolean;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = {
            open: false,
        };
    }

    render() {
        return (
            <div className="navbar_mobile">
                <div className="nav_wrapper">
                    <div className="left_nav">
                        <div className="logo_wrapper">
                            <img src="./assets/logo.png" alt="LF" />
                        </div>
                    </div>
                    <div className="right_nav">
                        <div className="burger_menu">
                            <div className="bline"></div>
                            <div className="bline"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
