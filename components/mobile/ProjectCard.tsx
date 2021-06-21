import React from "react";
import styles from "../../styles/Project.Card.Mobile.module.css";

interface ProjectCardProps {
    title: string;
    description: string;
    language: string;
    github: string | undefined;
    backup_url: string | null;
}
interface ProjectCardState {
    stars: string | undefined;
    url: string;
}

class ProjectCard extends React.Component<ProjectCardProps, ProjectCardState> {
    constructor(props: ProjectCardProps) {
        super(props);
        this.state = {
            stars: undefined,
            url: this.props.backup_url ? this.props.backup_url : "https://github.com/f0lg0",
        };
    }

    async componentDidMount() {
        console.log("CALLED");
        try {
            const res = await fetch(`${this.props.github}`);
            const repo = await res.json();

            if (repo.message) {
                this.setState({ stars: "Not found" });
            } else {
                this.setState({ stars: repo.stargazers_count.toString(), url: repo.html_url });
            }
        } catch (err) {
            console.error(err);
        }

        // this.setState({ stars: "34" });
    }

    render() {
        return (
            <a href={this.state.url} target="_blank" className={styles.wrapper}>
                <div className={styles.projectcard_mobile}>
                    <div className={styles.content}>
                        <p className={styles.language}>{this.props.language.toUpperCase()}</p>
                        <h1 className={styles.title}>{this.props.title}</h1>
                        <p className={styles.description}>{this.props.description}</p>
                        <div className={styles.github_stars}>
                            <div className={styles.icon}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1"
                                    stroke="#ffffff"
                                    fill="#ffffff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                </svg>
                            </div>
                            <p className={styles.amt}>{this.state.stars}</p>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

export default ProjectCard;
