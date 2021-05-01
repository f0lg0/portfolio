import React from "react";
import "./ProjectCard.css";

interface CardProps {
    title: string;
    language: string;
    description: string;
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
        return (
            <div className="card" ref={this.cardRef}>
                <div className="content_wrapper">
                    <div className="details">
                        <h3>{this.props.title}</h3>
                        <h4 className={this.props.language.toLowerCase()}>{this.props.language}</h4>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="thumbnail"></div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
