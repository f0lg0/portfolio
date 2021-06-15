import React from "react";
import "./BodySection.css";

import ProjectCard from "./ProjectCard";

interface BodyProps {}
interface BodyState {}

class BodySection extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="body_mobile">
                <div className="projects_container_mobile">
                    <ProjectCard
                        title="CapiHub"
                        language="Typescript"
                        description="A platform where students can share their school work."
                        github="https://github.com/capihub/"
                    />
                    <ProjectCard
                        title="CHIP-8 Emulator"
                        language="C"
                        description="A simple emulator for the CHIP-8 interpreted programming language."
                        github="https://github.com/f0lg0/CHIP-8"
                    />
                    <ProjectCard
                        title="Oncogene"
                        language="Python"
                        description="A Windows/Linux RAT written using TCP sockets."
                        github="https://github.com/f0lg0/Oncogene"
                    />
                    <ProjectCard
                        title="StopCovid"
                        language="VueJS"
                        description="A website to track and analyze Covid-19 in Italy"
                        github="https://github.com/f0lg0/stopcovid-website"
                    />
                </div>
            </div>
        );
    }
}

export default BodySection;
