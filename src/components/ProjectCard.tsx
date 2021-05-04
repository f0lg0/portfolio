import React from "react";
import "./ProjectCard.css";

interface CardProps {
    title: string;
    language: string;
    description: string;
    img_path: string;
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

        if (this.state.expanded) {
            expanded = (
                <div className="expanded_content">
                    <p>This is some dummy text that will be visible only when the user expands the card</p>
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
                            stroke-width="2"
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
