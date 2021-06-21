import styles from "../../styles/Body.Section.Desktop.module.css";
import ProjectCard from "./ProjectCard";

export default function BodySection() {
    return (
        <div className={styles.body_section}>
            <div className={styles.about_section} id="About">
                <h2>About</h2>
                <div className={styles.line}></div>
                <p>
                    I'm a senior highschool student interested in computer science. My skills range from making websites and related infrastructures to system
                    programming. I have knowledge in the Linux environment and I like to experiment and study new things every day.
                </p>

                <p>
                    I'm based in Italy but I know English quite well thanks to some experience. I normally code alone but I have partecipated in multiple team
                    projects, some of them are still a work in progress.
                </p>
            </div>

            <div className={styles.projects_section} id="Projects">
                <h2>Projects</h2>
                <div className={styles.line}></div>

                <div className={styles.projects_container}>
                    <ProjectCard
                        title="CapiHub"
                        language="Typescript"
                        description="A platform where students can share their school work."
                        img_path="./capihub.png"
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
                        img_path="./chip.png"
                        expanded_content="A simple emulator for the CHIP-8 interpreted programming language written in C (SDL for graphics). The code is meant to be readable and clear, with a lot of comments. My main focus was the architecture, understanding opcodes and how things worked on a very low level."
                        techDetails={[{ key: "Tech stack", val: "C, SDL library for the graphics." }]}
                        github="https://github.com/f0lg0/CHIP-8"
                    />
                    <ProjectCard
                        title="Oncogene"
                        language="Python"
                        description="A Windows/Linux RAT written using TCP sockets."
                        img_path="./oncogene.png"
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

            <div className={styles.tech} id="Tech">
                <h2>Skills</h2>
                <div className={styles.line}></div>

                <div className={styles.languages}>
                    <p>Technologies I've worked with</p>

                    <div className={styles.lang_grid}>
                        <div className={styles.lang}>
                            <img src="https://www.rust-lang.org/logos/rust-logo-256x256.png" alt="Rust" />
                        </div>
                        <div className={styles.lang}>
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fletter_c%2Fletter_c_PNG22.png&f=1&nofb=1"
                                alt="C"
                            />
                        </div>
                        <div className={styles.lang}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="Javascript"
                            />
                        </div>
                        <div className={styles.lang}>
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4c%2FTypescript_logo_2020.svg%2F1200px-Typescript_logo_2020.svg.png&f=1&nofb=1"
                                alt="Typescript"
                            />
                        </div>
                        <div className={styles.lang}>
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPython_logo_icon.png&f=1&nofb=1"
                                alt="Python"
                            />
                        </div>
                        <div className={styles.lang}>
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdwglogo.com%2Fwp-content%2Fuploads%2F2017%2F12%2FMongoDB_logo_01.png&f=1&nofb=1"
                                alt="MongoDB"
                            />
                        </div>
                        <div className={styles.lang}>
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F17%2FGraphQL_Logo.svg%2F1200px-GraphQL_Logo.svg.png&f=1&nofb=1"
                                alt="GraphQL"
                            />
                        </div>
                        <div className={styles.lang}>
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fnodejs-png-nodejs-icon-png-50-px-1600.png&f=1&nofb=1"
                                alt="NodeJS"
                            />
                        </div>
                        <div className={styles.lang}>
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flofrev.net%2Fwp-content%2Fphotos%2F2014%2F10%2FLinux-logo.png&f=1&nofb=1"
                                alt="Linux"
                            />
                        </div>
                        <div className={styles.lang}>
                            <img src="./react.png" alt="React" />
                        </div>
                        <div className={styles.lang}>
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FVue.js_Logo_2.svg%2F1200px-Vue.js_Logo_2.svg.png&f=1&nofb=1"
                                alt="VueJS"
                            />
                        </div>
                        <div className={styles.lang}>
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9f%2FVimlogo.svg%2F1200px-Vimlogo.svg.png&f=1&nofb=1"
                                alt="Vim"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.thanks} id="Thanks">
                <h2>Thanks</h2>
                <div className={styles.line}></div>

                <p>Thanks kind stranger for visiting my site, feel free to contact me if you have any questions.</p>
            </div>
        </div>
    );
}
