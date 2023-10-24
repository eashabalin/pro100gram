"use client"

import Image from "next/image";
import styles from "./like.module.scss"
import {useState} from "react";

export interface LikeProps {
    number: number
}

export default function Like({
    number
}: LikeProps) {
    const [isActive, setActive] = useState(false)
    return <span className={styles.like}>
        <div className={styles.like_img}>
            <Image
                onClick={(e) => {setActive(!isActive)}}
                alt='like'
                src={isActive ? "/icons/like_button/like-active.svg" : "/icons/like_button/like.svg"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '22px', height: 'auto' }}
            />
        </div>
        <span>{number}</span>
    </span>
}