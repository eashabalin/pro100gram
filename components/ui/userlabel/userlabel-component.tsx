import styles from "@/components/ui/userlabel/userlabel.module.scss";
import Image from "next/image";

export interface UserLabelProps {
    title: string
    subtitle: string
    imgsrc: string
  }

export default function UserLabel({
    title,
    subtitle,
    imgsrc,
}: UserLabelProps) {
    return <div className={styles.user_label}>
        <span className={styles.user_label_avatar}>
            <Image src={ imgsrc } width={35} height={35} alt="avatar"/>
        </span>
        <div className={styles.user_label_text}>
            <div className={styles.user_label_text_name}>{ title }</div>
            <div className={styles.user_label_text_date}>{ subtitle }</div>
        </div>
    </div>
}