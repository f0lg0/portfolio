import React from "react";
import "./ProjectCard.css";

interface CardProps {
    title: string;
    subtitle: string;
    img_path: string;
}

interface CardState {}

class ProjectCard extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="card"></div>;
    }
}

export default ProjectCard;
