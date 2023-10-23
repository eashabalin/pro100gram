import styles from "@/components/ui/button_link/button-link.module.scss";
import {FC} from "react";
import Link from "next/link";


interface IProps {
    label: string
    href: string
    className?: string
}

const ButtonLinkComponent: FC<IProps> = ({label, className, href}) => {
    return <Link href={href} className={`${styles.button} ${className}`}>{label}</Link>
}

export default ButtonLinkComponent