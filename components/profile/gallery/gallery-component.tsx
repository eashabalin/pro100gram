import {FC, JSX} from "react";
import Image from "next/image"
import styles from "@/components/profile/gallery/gallery.module.scss"
import Link from "next/link";

export type PictureProp = {
    username: string, id: number, imgsrc: string
}

interface IProps {
    pictures: PictureProp[]
}

const GalleryComponent: FC<IProps> = ({pictures}) => {
    const imgs: JSX.Element[] = pictures.map((picture, idx) => {
        return <Link key={`picture#${idx}`} href={`/post/${picture.username}/${picture.id}`}>
            <Image
                src={picture.imgsrc}
                alt={`picture #${idx}`} width={0} height={0} sizes={"100vw"}/></Link>
    })

    return <div className={styles.container}>
        <span>{`${imgs.length} публикаций`}</span>
        {imgs}
    </div>
}

export default GalleryComponent