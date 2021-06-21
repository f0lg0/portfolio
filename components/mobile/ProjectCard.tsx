import React from "react";
import styles from "../../styles/Project.Card.Mobile.module.css";

interface ProjectCardProps {
    title: String;
    description: String;
    language: String;
    github: String;
}
interface ProjectCardState {}

class ProjectCard extends React.Component<ProjectCardProps, ProjectCardState> {
    constructor(props: ProjectCardProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={styles.projectcard_mobile}>
                <p className={styles.language_mobile}></p>
                <h1 className={styles.title_mobile}></h1>
                <p className={styles.description_mobile}></p>
                <div className={styles.github_mobile}></div>
            </div>
        );
    }
}

export default ProjectCard;
