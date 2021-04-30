import React from "react";
import "./BodySection.css";

import ProjectCard from "../ProjectCard";

interface BodyProps {}
interface BodyState {}

class BodySection extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="body_section">
                <div className="about_section" id="About">
                    <h2>About</h2>
                    <div className="line"></div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div className="projects_section" id="Projects">
                    <h2>Projects</h2>
                    <div className="line"></div>

                    <div className="projects_container">
                        <ProjectCard title="Testing" subtitle="Lorem ipsum" img_path="none" />
                        <ProjectCard title="Testing" subtitle="Lorem ipsum" img_path="none" />
                        <ProjectCard title="Testing" subtitle="Lorem ipsum" img_path="none" />
                    </div>
                </div>
            </div>
        );
    }
}

export default BodySection;
