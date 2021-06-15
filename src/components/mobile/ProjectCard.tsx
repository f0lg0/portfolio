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
        return <div className="projectcard_mobile"></div>;
    }
}

export default ProjectCard;
