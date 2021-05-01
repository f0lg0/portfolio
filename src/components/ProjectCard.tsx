import React from "react";
import "./ProjectCard.css";

interface CardProps {
    title: string;
    subtitle: string;
    img_path: string;
}

interface CardState {}

class ProjectCard extends React.Component<CardProps, CardState> {
    private cardRef: React.RefObject<HTMLDivElement>;

    constructor(props: CardProps) {
        super(props);
        this.state = {};

        this.cardRef = React.createRef();
    }

    render() {
        return <div className="card" ref={this.cardRef}></div>;
    }
}

export default ProjectCard;
