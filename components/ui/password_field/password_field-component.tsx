import styles from "@/components/ui/password_field/password_field.module.scss";
import Image from "next/image";
import TextField from "../text_field/text_field-component";


export interface PasswordFieldProps {
    placeholder: string
}

export default function PasswordField({
    placeholder,
}: PasswordFieldProps) {
    return <div className={styles.passwordField}>
        <div className={styles.textField}>
            <TextField placeholder={placeholder} type={"password"}></TextField>
        </div>
    </div>
    
}
