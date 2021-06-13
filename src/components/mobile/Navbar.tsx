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

        this.toggleBurger = this.toggleBurger.bind(this);
    }

    toggleBurger() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div className="navbar_mobile">
                <div className="nav_wrapper">
                    <div className="left_nav">
                        <a href="/#">
                            <div className="logo_wrapper">
                                <img src="./assets/logo.png" alt="LF" />
                            </div>
                        </a>
                    </div>
                    <div className="right_nav">
                        <div className="burger_menu" onClick={this.toggleBurger}>
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
