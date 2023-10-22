import styles from "@/components/ui/label_counter/label_counter.module.scss"
import {useRouter} from "next/navigation";
import Image from 'next/image'
import React from "react";

interface Props {
    value: number
    label: string
}
export default function LabelCounter({value, label} : Props) {

    return <div className={styles.container}>
        <div className={styles.value}>{value}</div>
        <div className={styles.label}>{label}</div>
    </div>
}