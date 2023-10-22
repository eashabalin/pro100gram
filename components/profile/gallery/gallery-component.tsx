import {FC, JSX} from "react";
import Image from "next/image"
import styles from "@/components/profile/gallery/gallery.module.scss"

interface IProps {
    pictures: string[]
}
const GalleryComponent: FC<IProps> = ({pictures}) => {
    const imgs: JSX.Element[] = pictures.map((src, idx) => {
        return <Image key={`picture#${idx}`} src={src} alt={`picture #${idx}`} width={0} height={0} sizes={"100vw"}></Image>
    })

    return <div className={styles.container}>
        <span>{`${imgs.length} публикаций`}</span>
        {imgs}
    </div>
}

export default GalleryComponent