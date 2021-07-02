import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

import styles from "../../styles/ArticlePage.Desktop.module.css";

interface Paths {
    params: {
        slug: string;
    };
}

interface ArticleFrontmatter {
    title: string;
    date: string;
    excerpt: string;
    cover_image: string;
}

interface ArticlePageProps {
    frontmatter: ArticleFrontmatter;
    slug: string;
    content: string;
}

export default function ArticlePage(article: ArticlePageProps) {
    return (
        <div className={styles.article_body}>
            <div className={styles.metadata}>
                <p>{article.frontmatter.date}</p>
                <h1>{article.frontmatter.title}</h1>
                <div className={styles.excerpt}>
                    <div className={styles.line}></div>
                    <p>{article.frontmatter.excerpt}</p>
                    <div className={styles.line}></div>
                </div>
            </div>

            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{ __html: marked(article.content) }}></div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("articles"));

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }: Paths) {
    const markdownWithMeta = fs.readFileSync(path.join("articles", slug + ".md"), "utf-8");

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    };
}
