import React from "react";
import "./ProjectCard.css";

type TechDetailsObject = {
    key: string;
    val: string;
};

interface CardProps {
    title: string;
    language: string;
    description: string;
    img_path: string;
    expanded_content?: string;
    techDetails?: Array<TechDetailsObject>;
    github?: string;
}

interface CardState {
    expanded: boolean;
}

class ProjectCard extends React.Component<CardProps, CardState> {
    private cardRef: React.RefObject<HTMLDivElement>;

    constructor(props: CardProps) {
        super(props);
        this.state = {
            expanded: false,
        };

        this.cardRef = React.createRef();
    }

    render() {
        let expanded = undefined;
        let githubLink = undefined;
        let techDetails = [];

        if (this.state.expanded) {
            if (this.props.techDetails) {
                for (let i = 0; i < this.props.techDetails.length; i++) {
                    techDetails.push(
                        <p>
                            <span>{this.props.techDetails[i].key}:</span> {this.props.techDetails[i].val}
                        </p>
                    );
                }
            }
            if (this.props.github) {
                githubLink = (
                    <div className="github_container">
                        <div className="github_wrapper">
                            <a href={this.props.github} target="_blank" rel="noopener noreferrer">
                                <img src="./assets/github_logo_64.png" alt="github logo" />
                            </a>
                        </div>
                    </div>
                );
            }
            expanded = (
                <div className="expanded_wrapper">
                    <div className="expanded_content">
                        <p>{this.props.expanded_content}</p>
                        <div className="tech_details">{techDetails}</div>
                    </div>
                </div>
            );
        }
        return (
            <div className={this.state.expanded ? "card card_expanded" : "card card_normal"} ref={this.cardRef}>
                <div className="frame">
                    <div className="spacer"></div>
                    <div className="content_wrapper">
                        <div className="details">
                            <h3>{this.props.title}</h3>
                            <h4 className={this.props.language.toLowerCase()}>{this.props.language}</h4>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="thumbnail">
                            <img src={this.props.img_path} alt="project thumbnail" />
                        </div>
                    </div>
                    {expanded}
                    {githubLink}
                    <div
                        className="expand_icon"
                        onClick={() => {
                            this.setState({ expanded: !this.state.expanded });
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#f2f2f2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="18" y1="13" x2="12" y2="19" />
                            <line x1="6" y1="13" x2="12" y2="19" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
