import styles from "../../styles/Blog.Desktop.module.css";
import Image from "next/image";

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
            <div className={styles.featured}>
                <h2>Featured</h2>
                <div
                    className={styles.article_wrapper}
                    onClick={() => {
                        alert("Coming soon!");
                    }}
                >
                    <div className={styles.cover_image}>
                        <Image src={posts[0].frontmatter.cover_image} alt="Thumbnail" objectFit="fill" layout="fill" />
                    </div>
                    <div className={styles.main_article_details}>
                        <h3>{posts[0].frontmatter.title}</h3>
                        <div className={styles.desc}>
                            <div className={styles.fade}></div>
                            <pre className={styles.preserve_text}>
                                <p>{posts[0].frontmatter.excerpt}</p>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.sep}>
                <h2>All</h2>
            </div>

            <div className={styles.body}>
                <div className={styles.articles}>
                    {posts.map((post, index) => {
                        return (
                            <div
                                className={styles.article}
                                key={index}
                                onClick={() => {
                                    alert("Coming soon!");
                                }}
                            >
                                <div className={styles.thumbnail}>
                                    <Image src={post.frontmatter.cover_image} layout="fill" objectFit="fill" />
                                </div>
                                <div className={styles.text}>
                                    <p className={styles.article_date}>{post.frontmatter.date}</p>
                                    <h2>{post.frontmatter.title}</h2>

                                    <p className={styles.article_desc}>{post.frontmatter.excerpt}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
