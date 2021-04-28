import React from "react";
import "./Navbar.css";

interface NavbarProps {}
interface NavbarState {}

class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="navbar">
                <div className="main_text">
                    <p>
                        <span>Folgoni</span> Leonardo
                    </p>
                </div>
                <div className="links">
                    <div className="link">
                        <a href="#About">About</a>
                    </div>
                    <div className="link">
                        <a href="#Projects">Projects</a>
                    </div>
                    <div className="link">
                        <a href="#Contact">Contact</a>
                    </div>
                </div>
                <div className="socials">
                    <div className="social">
                        <div className="icon"></div>
                        <div className="name">
                            <p>Github</p>
                        </div>
                    </div>
                    <div className="social">
                        <div className="icon"></div>
                        <div className="name">
                            <p>Twitter</p>
                        </div>
                    </div>
                    <div className="email"></div>
                </div>
            </div>
        );
    }
}

export default Navbar;
