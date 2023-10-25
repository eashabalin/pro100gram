import styles from "@/components/profile/main_profile/main-profile.module.scss"
import Image from 'next/image'
import React from "react";
import LabelCounter from "@/components/ui/label_counter/label-counter-component";
import Link from "next/link";

type Props = {
    imageSrc: string
    width: number
    height: number
    subscribersCount: number
    subscriptionsCount: number
    username: string
}

export default function MainProfile({imageSrc, height, width, subscriptionsCount, subscribersCount, username}: Props) {

    return <div className={styles.container}>
        <div className={styles.left}><Link href={`/profile/${username}/subscriptions`}>
            <LabelCounter label="подписки" value={subscriptionsCount}/>
        </Link></div>
        <Image className={styles.photo} src={imageSrc} width={width} height={height} alt="фото профиля"></Image>
        <div className={styles.right}><Link href={`/profile/${username}/subscribers`}>
            <LabelCounter label="подписчики" value={subscribersCount}/>
        </Link></div>
    </div>
}