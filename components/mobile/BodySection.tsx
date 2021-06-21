import ProjectCard from "./ProjectCard";
import styles from "../../styles/Body.Section.Mobile.module.css";

export default function BodySection() {
    return (
        <div className={styles.body_mobile}>
            <div className={styles.projects_container_mobile}>
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
        </div>
    );
}
