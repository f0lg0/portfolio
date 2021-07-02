import styles from "../../styles/Blog.Desktop.module.css";
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
            <div className={styles.featured}>
                <h2>Featured</h2>
                <Link href={`/blog/${posts[0].slug}`} passHref>
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
                </Link>
            </div>

            <div className={styles.sep}>
                <h2>All</h2>
            </div>

            <div className={styles.body}>
                <div className={styles.articles}>
                    {posts.map((post, index) => {
                        return (
                            <div className={styles.grid_element} key={index}>
                                <Link href={`/blog/${post.slug}`}>
                                    <div className={styles.article}>
                                        <div className={styles.thumbnail}>
                                            <Image src={post.frontmatter.cover_image} layout="fill" objectFit="fill" />
                                        </div>
                                        <div className={styles.text}>
                                            <p className={styles.article_date}>{post.frontmatter.date}</p>
                                            <h2>{post.frontmatter.title}</h2>

                                            <div className={styles.desc_wrapper}>
                                                <div className={styles.small_fade}></div>
                                                <pre className={styles.preserve_text}>
                                                    <p className={styles.article_desc}>{post.frontmatter.excerpt}</p>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
