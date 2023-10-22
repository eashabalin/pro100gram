import styles from "@/components/ui/button/button.module.scss";
import {FC} from "react";


interface IProps {
    label: string
    className?: string
}

const ButtonComponent: FC<IProps> = ({label, className}) => {
    return <button className={`${styles.button} ${className}`}>{label}</button>
}

export default ButtonComponent