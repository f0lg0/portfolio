import React from "react";
import styles from "../../styles/Navbar.Mobile.module.css";

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
            <div className={styles.navbar_mobile}>
                <div className={styles.nav_wrapper}>
                    <div className={styles.left_nav}>
                        <a href="/#">
                            <div className={styles.logo_wrapper}>
                                <img src="/logo.png" alt="LF" />
                            </div>
                        </a>
                    </div>
                    <div className={styles.right_nav}>
                        <div className={styles.spacer_chrome}></div>
                        <div className={styles.burger_menu} onClick={this.toggleBurger}>
                            <div className={styles.bline}></div>
                            <div className={styles.bline}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
