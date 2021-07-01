import styles from "../../styles/Blog.module.css";
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
        <div
            className={styles.featured}
            onClick={() => {
                alert("Coming soon!");
            }}
        >
            <h2>Featured</h2>
            <div className={styles.article_wrapper}>
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
    );
}
