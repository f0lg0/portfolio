import React from "react";
import styles from "../../styles/Project.Card.Desktop.module.css";
import Image from "next/image";

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

const card_styles_expanded_true = styles.card + " " + styles.card_expanded;
const card_styles_expanded_false = styles.card + " " + styles.card_normal;

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
                            <span>{this.props.techDetails[i].key}:</span>{" "}
                            {/http/.test(this.props.techDetails[i].val) ? (
                                <a
                                    href={this.props.techDetails[i].val}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {this.props.techDetails[i].val}
                                </a>
                            ) : (
                                this.props.techDetails[i].val
                            )}
                        </p>
                    );
                }
            }
            if (this.props.github) {
                githubLink = (
                    <div className={styles.github_container}>
                        <div className={styles.github_wrapper}>
                            <a
                                href={this.props.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/github_logo_64.png"
                                    alt="github logo"
                                    width={64}
                                    height={64}
                                />
                            </a>
                        </div>
                    </div>
                );
            }
            expanded = (
                <div className={styles.expanded_wrapper}>
                    <div className={styles.expanded_content}>
                        <p>{this.props.expanded_content}</p>
                        <div className={styles.tech_details}>{techDetails}</div>
                    </div>
                </div>
            );
        }
        return (
            <div
                className={
                    this.state.expanded
                        ? card_styles_expanded_true
                        : card_styles_expanded_false
                }
                ref={this.cardRef}
            >
                <div className={styles.frame}>
                    <div className={styles.spacer}></div>
                    <div className={styles.content_wrapper}>
                        <div className={styles.details}>
                            <h3>{this.props.title}</h3>
                            <h4
                                className={
                                    styles[this.props.language.toLowerCase()]
                                }
                            >
                                {this.props.language}
                            </h4>
                            <p>{this.props.description}</p>
                        </div>
                        <div className={styles.thumbnail}>
                            <Image
                                src={this.props.img_path}
                                alt="project thumbnail"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                    </div>
                    {expanded}
                    {githubLink}
                    <div
                        className={styles.expand_icon}
                        onClick={() => {
                            this.setState({ expanded: !this.state.expanded });
                        }}
                    >
                        {this.state.expanded ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#ffffff"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="18" y1="11" x2="12" y2="5" />
                                <line x1="6" y1="11" x2="12" y2="5" />
                            </svg>
                        ) : (
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
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="18" y1="13" x2="12" y2="19" />
                                <line x1="6" y1="13" x2="12" y2="19" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
