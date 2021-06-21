import React from "react";
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

    getScreenHeightNoScroll() {
        return {
            height: window.innerHeight,
        };
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

                        {this.state.open ? (
                            <div className={styles.burger_content} style={this.getScreenHeightNoScroll()} onClick={this.toggleBurger}></div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
