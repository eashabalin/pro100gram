import Image from "next/image";
import styles from "./comment.module.scss"

export interface CommentProps {
    number: number
}

export default function Comment({
    number
}: CommentProps) {
    return <span className={styles.comment}>
        <div className={styles.comment_img}>
            <Image
                alt='comment'
                src="/comment.svg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '22px', height: 'auto' }}
            />
        </div>
        <span>{number}</span>
    </span>
}