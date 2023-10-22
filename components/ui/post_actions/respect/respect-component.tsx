import Image from "next/image";
import styles from "./respect.module.scss"

export interface RespectProps {
}

export default function Respect({
}: RespectProps) {
    return <Image
        alt='respect'
        src="/respect.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ height: '22px', width: 'auto' }}
    />
}