import styles from "@/components/ui/post/post.module.scss";
import Image from "next/image";
import UserLabel from "../userlabel/userlabel-component";
import PostPhoto from "../post_photo/post_photo-component";
import Like from "../post_actions/like/like-component";
import Comment from "../post_actions/comment/comment-component";
import Respect from "../post_actions/respect/respect-component";
import Disrespect from "../post_actions/disrespect/disrespect-component";
import Link from "next/link";

export interface PostProps {
    username: string
    subtitle: string
    imgsrcs: string[]
    userAvatarSrc: string
    description: string
    likesNumber: number
    commentsNumber: number
}

export default function PostComponent({
    username,
    userAvatarSrc,
    subtitle,
    imgsrcs,
    description,
    likesNumber,
    commentsNumber
}: PostProps) {
    return <div className={styles.post}>
        <div className={styles.user_label}>
                <UserLabel title={ username } subtitle={ subtitle } imgsrc={ userAvatarSrc }/>
            </div>
        <div className={styles.post_photo}>
        <PostPhoto imgsrcs={ imgsrcs }/>
        </div>
        <div className={styles.post_actions}>
            <span className={styles.post_actions_basic}>
                <Like number={ likesNumber }/>
                <Comment number={ commentsNumber }/>
            </span>
            <span className={styles.post_actions_other}>
            <Respect/>
            <Disrespect/>
            </span>
        </div>
        <div className={styles.post_text}>
            { description }
        </div>
    </div>
}