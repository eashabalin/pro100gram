import styles from "@/components/ui/button/button.module.scss";


export interface ButtonProps {
    label: string
}

export default function Button({
    label,
}: ButtonProps) {
    return <button className={styles.button}>{label}</button>
}
