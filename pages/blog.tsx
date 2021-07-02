import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";

import styles from "../styles/Blog.General.module.css";
import BlogLogo from "../public/theblog.svg";
import Image from "next/image";

import DesktopFeed from "../components/desktop/BlogFeed";

interface ArticleFrontmatter {
    title: string;
    date: string;
    excerpt: string;
    cover_image: string;
}

interface BlogArticle {
    slug: string;
    frontmatter: ArticleFrontmatter;
}

interface BlogProps {
    posts: [BlogArticle];
}

interface BlogState {
    isMobile: boolean;
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("articles"));
    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");

        const content = fs.readFileSync(path.join("articles", filename), "utf-8");
        const { data: frontmatter } = matter(content);

        return {
            slug,
            frontmatter,
        };
    });

    return {
        props: {
            posts: posts,
        },
    };
}

class Blog extends React.Component<BlogProps, BlogState> {
    constructor(props: BlogProps) {
        super(props);
        this.state = { isMobile: false };
        this.checkScreenSize = this.checkScreenSize.bind(this);
    }

    checkScreenSize() {
        const screenWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        this.setState({ isMobile: screenWidth <= 760 ? true : false });
    }
    componentDidMount() {
        this.checkScreenSize();
        window.addEventListener("resize", this.checkScreenSize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.checkScreenSize);
    }

    render() {
        const tmp = {
            marginTop: "150px",
            color: "var(--accent-color)",
        };
        return (
            <div className={styles.main}>
                <div className={styles.blog_title}>
                    <Image src={BlogLogo} alt="THE BLOG" />
                </div>

                {this.state.isMobile ? (
                    <div>
                        <h3 style={tmp}>
                            Feed not available in mobile. <br></br>Coming soon!
                        </h3>
                    </div>
                ) : (
                    <DesktopFeed posts={this.props.posts} />
                )}
            </div>
        );
    }
}

export default Blog;
