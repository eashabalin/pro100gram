import styles from "@/components/ui/userlabel/userlabel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

export interface PostPhotoProps {
    imgsrcs: string[]
}

export default function PostPhoto({
    imgsrcs
}: PostPhotoProps) {
    const images = imgsrcs.map((src) => 
    <Image
        key={src}
        alt='photo'
        src={ src }
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '100%', aspectRatio: 1, objectFit: 'cover' }}
    />
    );

    return <Carousel showStatus={false} showThumbs={false}>
        { images }
    </Carousel>
}