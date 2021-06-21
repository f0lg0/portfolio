import React from "react";
import styles from "../../styles/Project.Card.Mobile.module.css";

interface ProjectCardProps {
    title: String;
    description: String;
    language: String;
    github: String;
}
interface ProjectCardState {
    stars: string | undefined;
}

class ProjectCard extends React.Component<ProjectCardProps, ProjectCardState> {
    constructor(props: ProjectCardProps) {
        super(props);
        this.state = {
            stars: undefined,
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch(`${this.props.github}`);
            const repo = await res.json();

            if (repo.message) {
                this.setState({ stars: "Not found" });
            } else {
                this.setState({ stars: repo.stargazers_count.toString() });
            }
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div className={styles.projectcard_mobile}>
                <p className={styles.language_mobile}>{this.props.language}</p>
                <h1 className={styles.title_mobile}>{this.props.title}</h1>
                <p className={styles.description_mobile}>{this.props.description}</p>
                <div className={styles.github_mobile}>{this.state.stars}</div>
            </div>
        );
    }
}

export default ProjectCard;
