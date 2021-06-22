import styles from "../styles/Blog.module.css";
import BlogLogo from "../public/theblog.svg";
import Image from "next/image";

export default function Blog() {
    return (
        <div className={styles.main}>
            <div className={styles.blog_title}>
                <Image src={BlogLogo} alt="THE BLOG" />
            </div>
        </div>
    );
}
