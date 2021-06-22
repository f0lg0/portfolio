import React from "react";
import Link from "next/link";

import styles from "../../styles/Navbar.Mobile.module.css";

interface NavbarProps {
    onOpen: (open: boolean) => void;
}
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
        this.props.onOpen(!this.state.open);
    }

    navigateTo(dst: string) {
        this.setState({ open: !this.state.open });
        this.props.onOpen(!this.state.open);

        setTimeout(() => {
            document.getElementById(dst)?.scrollIntoView();
        }, 300);
    }

    render() {
        return (
            <div className={styles.navbar_mobile}>
                <div className={styles.nav_wrapper}>
                    <div className={styles.left_nav}>
                        <Link href="/">
                            <div className={styles.logo_wrapper}>
                                <img src="/logo.png" alt="LF" />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.right_nav}>
                        <div className={styles.spacer_chrome}></div>
                        <div className={styles.burger_menu} onClick={this.toggleBurger}>
                            <div className={styles.bline}></div>
                            <div className={styles.bline}></div>
                        </div>

                        {this.state.open ? (
                            <div className={styles.burger_content}>
                                <div className={styles.top_menu}>
                                    <div className={styles.space}></div>
                                    <div className={styles.icon} onClick={this.toggleBurger}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#ffffff"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                </div>

                                <div className={styles.links_container}>
                                    <p onClick={() => this.navigateTo("About")}>About</p>
                                    <p onClick={() => this.navigateTo("Projects")}>Projects</p>
                                    <Link href="/blog">
                                        <p>Blog</p>
                                    </Link>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
