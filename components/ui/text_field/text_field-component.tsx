import styles from "@/components/ui/text_field/text_field.module.scss";


export interface TextFieldProps {
    placeholder: string
    type: string
}

export default function TextField({
    placeholder,
    type = "text",
}: TextFieldProps) {
    return <input placeholder={placeholder} className={styles.textField} type={type} />
}
