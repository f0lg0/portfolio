import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";

import styles from "../styles/Blog.General.module.css";

import DesktopFeed from "../components/desktop/BlogFeed";
import MobileFeed from "../components/mobile/BlogFeed";

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
        return (
            <div className={styles.main}>
                <div className={styles.blog_title}>
                    <svg width="1092" height="180" viewBox="0 0 1092 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M135.75 2.49999V36.75H89.25V178H46.5V36.75H5.21541e-08V2.49999H135.75ZM297.205 2.49999V178H254.455V105.75H187.955V178H145.205V2.49999H187.955V71.25H254.455V2.49999H297.205ZM358.816 36.75V72.25H416.066V105.25H358.816V143.75H423.566V178H316.066V2.49999H423.566V36.75H358.816ZM586.549 88C596.716 90.1667 604.882 95.25 611.049 103.25C617.216 111.083 620.299 120.083 620.299 130.25C620.299 144.917 615.132 156.583 604.799 165.25C594.632 173.75 580.382 178 562.049 178H480.299V2.49999H559.299C577.132 2.49999 591.049 6.58332 601.049 14.75C611.215 22.9167 616.299 34 616.299 48C616.299 58.3333 613.549 66.9167 608.049 73.75C602.715 80.5833 595.549 85.3333 586.549 88ZM523.049 73.5H551.049C558.049 73.5 563.382 72 567.049 69C570.882 65.8333 572.799 61.25 572.799 55.25C572.799 49.25 570.882 44.6667 567.049 41.5C563.382 38.3333 558.049 36.75 551.049 36.75H523.049V73.5ZM554.549 143.5C561.715 143.5 567.215 141.917 571.049 138.75C575.049 135.417 577.049 130.667 577.049 124.5C577.049 118.333 574.966 113.5 570.799 110C566.799 106.5 561.215 104.75 554.049 104.75H523.049V143.5H554.549ZM675.844 145H731.844V178H633.094V2.49999H675.844V145ZM823.234 179.75C806.734 179.75 791.568 175.917 777.734 168.25C764.068 160.583 753.151 149.917 744.984 136.25C736.984 122.417 732.984 106.917 732.984 89.75C732.984 72.5833 736.984 57.1667 744.984 43.5C753.151 29.8333 764.068 19.1667 777.734 11.5C791.568 3.83333 806.734 -3.09944e-06 823.234 -3.09944e-06C839.734 -3.09944e-06 854.818 3.83333 868.484 11.5C882.318 19.1667 893.151 29.8333 900.984 43.5C908.984 57.1667 912.984 72.5833 912.984 89.75C912.984 106.917 908.984 122.417 900.984 136.25C892.984 149.917 882.151 160.583 868.484 168.25C854.818 175.917 839.734 179.75 823.234 179.75ZM823.234 140.75C837.234 140.75 848.401 136.083 856.734 126.75C865.234 117.417 869.484 105.083 869.484 89.75C869.484 74.25 865.234 61.9167 856.734 52.75C848.401 43.4167 837.234 38.75 823.234 38.75C809.068 38.75 797.734 43.3333 789.234 52.5C780.901 61.6667 776.734 74.0833 776.734 89.75C776.734 105.25 780.901 117.667 789.234 127C797.734 136.167 809.068 140.75 823.234 140.75ZM1041.27 58C1038.1 52.1667 1033.52 47.75 1027.52 44.75C1021.68 41.5833 1014.77 40 1006.77 40C992.934 40 981.851 44.5833 973.518 53.75C965.184 62.75 961.018 74.8333 961.018 90C961.018 106.167 965.351 118.833 974.018 128C982.851 137 994.934 141.5 1010.27 141.5C1020.77 141.5 1029.6 138.833 1036.77 133.5C1044.1 128.167 1049.43 120.5 1052.77 110.5H998.518V79H1091.52V118.75C1088.35 129.417 1082.93 139.333 1075.27 148.5C1067.77 157.667 1058.18 165.083 1046.52 170.75C1034.85 176.417 1021.68 179.25 1007.02 179.25C989.684 179.25 974.184 175.5 960.518 168C947.018 160.333 936.434 149.75 928.768 136.25C921.268 122.75 917.518 107.333 917.518 90C917.518 72.6667 921.268 57.25 928.768 43.75C936.434 30.0833 947.018 19.5 960.518 12C974.018 4.33332 989.434 0.49999 1006.77 0.49999C1027.77 0.49999 1045.43 5.58332 1059.77 15.75C1074.27 25.9167 1083.85 40 1088.52 58H1041.27Z"
                            fill="#f2f2f2"
                        />
                    </svg>
                </div>

                {this.state.isMobile ? <MobileFeed posts={this.props.posts} /> : <DesktopFeed posts={this.props.posts} />}
            </div>
        );
    }
}

export default Blog;
