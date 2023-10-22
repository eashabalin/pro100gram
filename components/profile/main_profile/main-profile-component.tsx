import styles from "@/components/profile/main_profile/main-profile.module.scss"
import Image from 'next/image'
import React from "react";
import LabelCounter from "@/components/ui/label_counter/label-counter-component";

interface Props {
    imageSrc: string
    width: number
    height: number
}
export default function MainProfile({imageSrc, height, width}: Props) {

    return <div className={styles.container}>
        <LabelCounter label="подписки" value={5000}></LabelCounter>
        <Image className={styles.photo} src={imageSrc} width={width} height={height} alt="фото профиля"></Image>
        <LabelCounter label="подписчики" value={3257}></LabelCounter>
    </div>
}