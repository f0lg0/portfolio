import styles from "../../styles/Blog.Mobile.module.css";
import Image from "next/image";
import Link from "next/link";

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

export default function BlogFeed({ posts }: BlogProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.articles}>
                {posts.map((post, index) => {
                    return (
                        <Link href={`/blog/${post.slug}`} key={index}>
                            <div className={styles.article}>
                                <div className={styles.text}>
                                    <p className={styles.article_date}>{post.frontmatter.date}</p>
                                    <h2>{post.frontmatter.title}</h2>

                                    <div className={styles.desc_wrapper}>
                                        <div className={styles.fade}></div>
                                        <pre className={styles.preserve_text}>
                                            <p className={styles.article_desc}>{post.frontmatter.excerpt}</p>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
