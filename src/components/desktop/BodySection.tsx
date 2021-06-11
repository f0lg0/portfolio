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
                        I'm a senior highschool student interested in computer science. My skills range from making websites and related infrastructures to
                        system programming. I have knowledge in the Linux environment and I like to experiment and study new things every day.
                    </p>

                    <p>
                        I'm based in Italy but I know English quite well thanks to some experience. I normally code alone but I have partecipated in multiple
                        team projects, some of them are still a work in progress.
                    </p>
                </div>

                <div className="projects_section" id="Projects">
                    <h2>Projects</h2>
                    <div className="line"></div>

                    <div className="projects_container">
                        <ProjectCard
                            title="CapiHub"
                            language="Typescript"
                            description="A platform where students can share their school work."
                            img_path="./assets/capihub.png"
                            expanded_content="Built for students by students, CapiHub is a non-profit, free and community driven project born in collaboration with my high school. On this platform, students share their notes and other school material in order to build a powerful archive for future generations."
                            techDetails={[
                                { key: "Tech stack", val: "NodeJS with TypeScript and GraphQL for the backend and  Vue.js for the frontend." },
                                { key: "Status", val: "Inactive" },
                            ]}
                            github="https://github.com/capihub/"
                        />
                        <ProjectCard
                            title="CHIP-8 Emulator"
                            language="C"
                            description="A simple emulator for the CHIP-8 interpreted programming language."
                            img_path="./assets/chip.png"
                            expanded_content="A simple emulator for the CHIP-8 interpreted programming language written in C (SDL for graphics). The code is meant to be readable and clear, with a lot of comments. My main focus was the architecture, understanding opcodes and how things worked on a very low level."
                            techDetails={[{ key: "Tech stack", val: "C, SDL library for the graphics." }]}
                            github="https://github.com/f0lg0/CHIP-8"
                        />
                        <ProjectCard
                            title="Oncogene"
                            language="Python"
                            description="A Windows/Linux RAT written using TCP sockets."
                            img_path="./assets/oncogene.png"
                            expanded_content="A simple RAT written in Python 3 meant for educational/research purposes ONLY. Built for fun, Oncogene was my very first big project. The goal was to get into the cybersecurity world so I thought that making something by myself from scratch was the best way to get my hands dirty."
                            techDetails={[{ key: "Tech stack", val: "Python 3 and related libraries" }]}
                            github="https://github.com/f0lg0/Oncogene"
                        />
                        <ProjectCard
                            title="StopCovid"
                            language="VueJS"
                            description="A website to track and analyze Covid-19 in Italy"
                            img_path="https://weekly-covid-stats.vercel.app/img/logo.d1688faa.jpeg"
                            expanded_content="Built in collaboration with my highschool, StopCovid is a platform where you can easily take a look at raw Covid19 data from a simple and intuitive UI. There's also a YouTube channel ran by my professor where we analyze the numbers. This website is in Italian."
                            techDetails={[
                                { key: "Tech stack", val: "Vue.js 2" },
                                { key: "Status", val: "Active" },
                                { key: "Link", val: "https://weekly-covid-stats.vercel.app/#/" },
                            ]}
                            github="https://github.com/f0lg0/stopcovid-website"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BodySection;
