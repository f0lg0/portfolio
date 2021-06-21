import ProjectCard from "./ProjectCard";

import styles from "../../styles/Body.Section.Mobile.module.css";

export default function BodySection() {
    return (
        <div className={styles.body_mobile}>
            <div className={styles.about_section}>
                <h2>About</h2>
                <p>
                    I'm a senior highschool student interested in computer science. My skills range from making websites and related infrastructures to system
                    programming. I have knowledge in the Linux environment and I like to experiment and study new things every day.
                </p>

                <p>
                    I'm based in Italy but I know English quite well thanks to some experience. I normally code alone but I have partecipated in multiple team
                    projects, some of them are still a work in progress.
                </p>
            </div>
            <div className={styles.projects_container_mobile}>
                <h2>Projects</h2>

                <ProjectCard
                    title="CapiHub"
                    language="Typescript"
                    description="A platform where students can share their school work."
                    github="https://api.github.com/repos/capihub/capihub"
                    backup_url="https://github.com/capihub/capihub"
                />
                <ProjectCard
                    title="CHIP-8 Emulator"
                    language="C"
                    description="A simple emulator for the CHIP-8 interpreted programming language."
                    github="https://api.github.com/repos/f0lg0/CHIP-8"
                    backup_url="https://github.com/f0lg0/CHIP-8"
                />
                <ProjectCard
                    title="Oncogene"
                    language="Python"
                    description="A Windows/Linux RAT written using TCP sockets."
                    github="https://api.github.com/repos/f0lg0/Oncogene"
                    backup_url="https://github.com/f0lg0/Oncogene"
                />
                <ProjectCard
                    title="StopCovid"
                    language="VueJS"
                    description="A website to track and analyze Covid-19 in Italy"
                    github="https://api.github.com/repos/f0lg0/stopcovid-website"
                    backup_url="https://github.com/f0lg0/stopcovid-website"
                />
            </div>

            <h2 className={styles.skills_header}>Skills</h2>
            <div className={styles.skills}>
                <div className={styles.skill}>
                    <img src="https://www.rust-lang.org/logos/rust-logo-256x256.png" alt="Rust" />
                </div>
                <div className={styles.skill}>
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fletter_c%2Fletter_c_PNG22.png&f=1&nofb=1"
                        alt="C"
                    />
                </div>
                <div className={styles.skill}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                        alt="Javascript"
                    />
                </div>
                <div className={styles.skill}>
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4c%2FTypescript_logo_2020.svg%2F1200px-Typescript_logo_2020.svg.png&f=1&nofb=1"
                        alt="Typescript"
                    />
                </div>
                <div className={styles.skill}>
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPython_logo_icon.png&f=1&nofb=1"
                        alt="Python"
                    />
                </div>
                <div className={styles.skill}>
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdwglogo.com%2Fwp-content%2Fuploads%2F2017%2F12%2FMongoDB_logo_01.png&f=1&nofb=1"
                        alt="MongoDB"
                    />
                </div>
                <div className={styles.skill}>
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F17%2FGraphQL_Logo.svg%2F1200px-GraphQL_Logo.svg.png&f=1&nofb=1"
                        alt="GraphQL"
                    />
                </div>
                <div className={styles.skill}>
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fnodejs-png-nodejs-icon-png-50-px-1600.png&f=1&nofb=1"
                        alt="NodeJS"
                    />
                </div>
                <div className={styles.skill}>
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flofrev.net%2Fwp-content%2Fphotos%2F2014%2F10%2FLinux-logo.png&f=1&nofb=1"
                        alt="Linux"
                    />
                </div>
                <div className={styles.skill}>
                    <img src="./react.png" alt="React" />
                </div>
                <div className={styles.skill}>
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FVue.js_Logo_2.svg%2F1200px-Vue.js_Logo_2.svg.png&f=1&nofb=1"
                        alt="VueJS"
                    />
                </div>
                <div className={styles.skill}>
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9f%2FVimlogo.svg%2F1200px-Vimlogo.svg.png&f=1&nofb=1"
                        alt="Vim"
                    />
                </div>
            </div>
        </div>
    );
}
