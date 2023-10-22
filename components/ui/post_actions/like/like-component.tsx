import Image from "next/image";
import styles from "./like.module.scss"

export interface LikeProps {
    number: number
}

export default function Like({
    number
}: LikeProps) {
    return <span className={styles.like}>
        <div className={styles.like_img}>
            <Image
                alt='like'
                src="/like.svg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '22px', height: 'auto' }}
            />
        </div>
        <span>{number}</span>
    </span>
}