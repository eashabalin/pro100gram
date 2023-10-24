import styles from '@/app/styles.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PostComponent from '@/components/ui/post/post-component';
import {getPosts} from "@/services/post/post.service";
import {Posts} from "@/entities/post.entity";

export default async function Home() {
    const posts: Posts = await getPosts()
    return <div className={styles.content}>
        <div className={styles.posts}>
        {posts.map((post) => (
             <PostComponent
                key={post.authorUserName + post.id.toString()}
                username={post.authorUserName}
                subtitle={'5 часов назад'}
                imgsrcs={[post.imgSrc]}
                userAvatarSrc={post.authorAvatarSrc}
                description={post.description}
                likesNumber={post.likesCount}
                commentsNumber={post.commentsCount} />
        ))}
        </div>
    </div>
}




