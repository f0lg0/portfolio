import styles from "../../styles/Body.Section.Desktop.module.css";
import ProjectCard from "./ProjectCard";

import Link from "next/link";
import Image from "next/image";

export default function BodySection() {
    return (
        <div className={styles.body_section}>
            <span id="About"></span>
            <div className={styles.about_section}>
                <h2>About</h2>
                <div className={styles.line}></div>
                <p>
                    I&apos;m a senior highschool student interested in computer science. My skills range from making websites and related infrastructures to
                    system programming. I have knowledge in the Linux environment and I like to experiment and study new things every day.
                </p>

                <p>
                    I&apos;m based in Italy but I know English quite well thanks to some experience. I normally code alone but I have partecipated in multiple
                    team projects, some of them are still a work in progress.
                </p>
            </div>

            <div className={styles.projects_section}>
                <span id="Projects" style={{ paddingTop: "80px" }}></span>
                <h2>Projects</h2>
                <div className={styles.line}></div>

                <div className={styles.projects_container}>
                    <ProjectCard
                        title="Kademlia DHT"
                        language="Rust"
                        description="Simple implementation of the Kademlia DHT protocol in Rust with state dumping features."
                        img_path="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F20%2FChord_network.png&f=1&nofb=1"
                        expanded_content="Implementation of the distributed hash table 'Kademlia' in Rust, with features to graphically dump the internal state of a network node. Kademlia is a distributed hash table for decentralized peer-to-peer computer networks, it specifies the structure of the network and the exchange of information through node lookups."
                        techDetails={[{ key: "Language", val: "Rust" }]}
                        github="https://github.com/f0lg0/kademlia-dht"
                    />
                    <ProjectCard
                        title="CHIP-8 Emulator"
                        language="C"
                        description="A simple emulator for the CHIP-8 interpreted programming language."
                        img_path="/chip.png"
                        expanded_content="A simple emulator for the CHIP-8 interpreted programming language written in C (SDL for graphics). The code is meant to be readable and clear, with a lot of comments. My main focus was the architecture, understanding opcodes and how things worked on a very low level."
                        techDetails={[{ key: "Tech stack", val: "C, SDL library for the graphics." }]}
                        github="https://github.com/f0lg0/CHIP-8"
                    />
                    <ProjectCard
                        title="Oncogene"
                        language="Python"
                        description="A Windows/Linux RAT written using TCP sockets."
                        img_path="/oncogene.png"
                        expanded_content="A simple RAT written in Python 3 meant for educational/research purposes ONLY. Built for fun, Oncogene was my very first big project. The goal was to get into the cybersecurity world so I thought that making something by myself from scratch was the best way to get my hands dirty."
                        techDetails={[{ key: "Tech stack", val: "Python 3 and related libraries" }]}
                        github="https://github.com/f0lg0/Oncogene"
                    />
                    <ProjectCard
                        title="TCP Server"
                        language="C++"
                        description=" Boilerplate of a TCP Server written in C++ using the epoll API "
                        img_path="https://github.com/f0lg0/tcp-server-boilerplate/raw/main/assets/server.png"
                        expanded_content="Boilerplate of a multi-concurrent-connections TCP Server in order to speed up development of network applications in C/C++"
                        techDetails={[{ key: "Tech stack", val: "C++, epoll API" }]}
                        github="https://github.com/f0lg0/tcp-server-boilerplate"
                    />
                    <ProjectCard
                        title="6502 Emulator"
                        language="C"
                        description="A minimal 6502 microprocessor emulator."
                        img_path="/6502.png"
                        expanded_content="A minimal, single-stepped and beginner friendly 6502 emulator written in C using ncurses for graphics. This main goal of this project is to understand how CPUs works by directly emulating one and to debug it by single stepping instructions. The code is meant to be readable and understandable."
                        techDetails={[{ key: "Tech stack", val: "C, ncurses library for the graphics." }]}
                        github="https://github.com/f0lg0/6502"
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
                    <ProjectCard
                        title="pyChat"
                        language="Python"
                        description="A simple, encrypted and anonymous chat application written in Pyton using TCP sockets."
                        img_path="/pychat.png"
                        expanded_content="pyChat is a simple chat application written using sockets. Messages are custom crafted packets streamed in JSON format and everything encrypted with AES-256. The GUI is built in vanilla HTML/CSS/JS"
                        techDetails={[{ key: "Tech stack", val: "Python and Eel library for the GUI" }]}
                        github="https://github.com/f0lg0/pyChat"
                    />
                    <ProjectCard
                        title="Conway's Game of Life"
                        language="C"
                        description="An implementation of the famous Game of Life in C."
                        img_path="/gameoflife.jpg"
                        expanded_content="As the title suggets, this is Conway's Game of Life implemented in C. To render the world I am using plain normal keyboard characters, no external libraries required. You just need a terminal and a compiler"
                        techDetails={[{ key: "Tech stack", val: "C, Terminal window" }]}
                        github="https://github.com/f0lg0/c-gameoflife"
                    />
                    <ProjectCard
                        title="Personal portfolio"
                        language="Typescript"
                        description="This portfolio, built using Next.js + Typescript and designed by me."
                        img_path="/logo.png"
                        expanded_content="This website was built using Next.js mainly to try out something new. I've picked up React in a couple of days after a year of experience with Vue.js and this is my first product. Deployed to Vercel."
                        techDetails={[{ key: "Tech stack", val: "Next.js, React and Typescript" }]}
                        github="https://github.com/f0lg0/portfolio"
                    />
                </div>
            </div>

            <div className={styles.tech}>
                <h2>Skills</h2>
                <div className={styles.line}></div>

                <div className={styles.languages}>
                    <p>Technologies I&apos;ve worked with</p>

                    <div className={styles.lang_grid}>
                        <div className={styles.lang}>
                            <Image src="https://www.rust-lang.org/logos/rust-logo-256x256.png" alt="Rust" layout="fill" objectFit="fill" />
                        </div>
                        <div className={styles.lang}>
                            <Image
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fletter_c%2Fletter_c_PNG22.png&f=1&nofb=1"
                                alt="C"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                        <div className={styles.lang}>
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="Javascript"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                        <div className={styles.lang}>
                            <Image
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4c%2FTypescript_logo_2020.svg%2F1200px-Typescript_logo_2020.svg.png&f=1&nofb=1"
                                alt="Typescript"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                        <div className={styles.lang}>
                            <Image
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPython_logo_icon.png&f=1&nofb=1"
                                alt="Python"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                        <div className={styles.lang}>
                            <Image
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdwglogo.com%2Fwp-content%2Fuploads%2F2017%2F12%2FMongoDB_logo_01.png&f=1&nofb=1"
                                alt="MongoDB"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                        <div className={styles.lang}>
                            <Image
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F17%2FGraphQL_Logo.svg%2F1200px-GraphQL_Logo.svg.png&f=1&nofb=1"
                                alt="GraphQL"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                        <div className={styles.lang}>
                            <Image
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fnodejs-png-nodejs-icon-png-50-px-1600.png&f=1&nofb=1"
                                alt="NodeJS"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                        <div className={styles.lang}>
                            <Image
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flofrev.net%2Fwp-content%2Fphotos%2F2014%2F10%2FLinux-logo.png&f=1&nofb=1"
                                alt="Linux"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                        <div className={styles.lang}>
                            <Image src="/react.png" alt="React" layout="fill" objectFit="fill" />
                        </div>
                        <div className={styles.lang}>
                            <Image
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FVue.js_Logo_2.svg%2F1200px-Vue.js_Logo_2.svg.png&f=1&nofb=1"
                                alt="VueJS"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                        <div className={styles.lang}>
                            <Image
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9f%2FVimlogo.svg%2F1200px-Vimlogo.svg.png&f=1&nofb=1"
                                alt="Vim"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.contact}>
                <h2>Contact</h2>
                <div className={styles.line}></div>

                <Link href="mailto:folgonileonardo@gmail.com" passHref>
                    <p>folgonileonardo@gmail.com</p>
                </Link>
            </div>
        </div>
    );
}
