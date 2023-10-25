import styles from "@/components/ui/userlabel/userlabel.module.scss";
import Image from "next/image";
import Link from "next/link";

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
        <Link href={`/profile/${title}`}>
            <span className={styles.user_label_avatar}>
            <Image src={ imgsrc } width={36} height={36} alt="avatar"/>
        </span>
        </Link>


        <div className={styles.user_label_text}>
            <Link href={`/profile/${title}`}><div className={styles.user_label_text_name}>{ title }</div></Link>
            <div className={styles.user_label_text_date}>{ subtitle }</div>
        </div>
    </div>
}