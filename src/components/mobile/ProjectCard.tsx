import React from "react";
import "./ProjectCard.css";

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
            <div className="projectcard_mobile">
                <p className="language_mobile"></p>
                <h1 className="title_mobile"></h1>
                <p className="description_mobile"></p>
                <div className="github_mobile"></div>
            </div>
        );
    }
}

export default ProjectCard;
