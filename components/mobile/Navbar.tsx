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
                                    <p onClick={() => this.navigateTo("Contact")}>Contact</p>
                                    <Link href="/blog">
                                        <p>Blog</p>
                                    </Link>
                                </div>

                                <div className={styles.socials}>
                                    <Link href="https://github.com/f0lg0">
                                        <div className={styles.social}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.5 17.5V14.5833C12.5 13.75 12.5833 13.4167 12.0833 12.9167C14.4167 12.6667 16.6667 11.75 16.6667 7.91666C16.6657 6.92079 16.2771 5.96441 15.5833 5.24999C15.9087 4.38496 15.8788 3.42635 15.5 2.58332C15.5 2.58332 14.5833 2.33332 12.5833 3.66666C10.8894 3.22548 9.11064 3.22548 7.41667 3.66666C5.41667 2.33332 4.5 2.58332 4.5 2.58332C4.12123 3.42635 4.09128 4.38496 4.41667 5.24999C3.72288 5.96441 3.33435 6.92079 3.33333 7.91666C3.33333 11.75 5.58333 12.6667 7.91667 12.9167C7.41667 13.4167 7.41667 13.9167 7.5 14.5833V17.5M7.5 15.8333C3.91667 17 3.91667 13.75 2.5 13.3333L7.5 15.8333Z"
                                                    stroke="#F2F2F2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </Link>

                                    <Link href="https://twitter.com/f0lg0">
                                        <div className={styles.social}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.3334 3.34168C17.5 3.75001 16.6834 3.91584 15.8334 4.16668C14.8992 3.11251 13.5142 3.05418 12.1834 3.55251C10.8525 4.05084 9.98085 5.26918 10 6.66668V7.50001C7.29585 7.56918 4.88752 6.33751 3.33335 4.16668C3.33335 4.16668 -0.151647 10.3608 6.66669 13.3333C5.10669 14.3725 3.55085 15.0733 1.66669 15C4.42335 16.5025 7.42752 17.0192 10.0284 16.2642C13.0117 15.3975 15.4634 13.1617 16.4042 9.81251C16.6848 8.7939 16.8242 7.74156 16.8184 6.68501C16.8167 6.47751 18.0767 4.37501 18.3334 3.34084V3.34168Z"
                                                    stroke="#F2F2F2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </Link>

                                    <Link href="mailto:folgonileonardo@gmail.com">
                                        <div className={styles.social}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                                                    stroke="#5A92E1"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path d="M3 7L12 13L21 7" stroke="#5A92E1" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
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
