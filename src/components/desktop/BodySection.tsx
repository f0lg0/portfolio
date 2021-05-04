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
                        <ProjectCard title="CapiHub" language="Typescript" description="A platform where students can share their school work." img_path="./assets/capihub.png" />
                        <ProjectCard
                            title="CHIP-8 Emulator"
                            language="C"
                            description="A simple emulator for the CHIP-8 interpreted programming language."
                            img_path="./assets/chip.png"
                        />
                        <ProjectCard title="Oncogene" language="Python" description="A Windows/Linux RAT written using TCP sockets." img_path="./assets/oncogene.png" />
                        <ProjectCard
                            title="StopCovid"
                            language="VueJS"
                            description="A website to track and analyze Covid-19 in Italy"
                            img_path="https://weekly-covid-stats.vercel.app/img/logo.d1688faa.jpeg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BodySection;
