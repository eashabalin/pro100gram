import GoBack from "@/components/ui/goback/goback-component";
import PostComponent from "@/components/ui/post/post-component";
import {getUserPost} from "@/services/post/post.service";

export default async function PostPage({params}: { params: { username: string, postId: number } }) {
    const post = await getUserPost(params.username, params.postId)
    return <div className="content">
        <GoBack>Публикация</GoBack>
        <PostComponent
            username={post.authorUserName}
            userAvatarSrc={post.authorAvatarSrc}
            description={post.description}
            imgsrcs={[post.imgSrc]}
            likesNumber={post.likesCount}
            commentsNumber={post.commentsCount}
            subtitle={"что-то"}/>
    </div>
}