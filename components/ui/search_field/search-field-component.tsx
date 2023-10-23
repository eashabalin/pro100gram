import styles from "@/components/ui/search_field/search-field.module.scss";

export interface SearchFieldProps {
}

export default function SearchField({
}: SearchFieldProps) {
    return <div className={styles.searchField}>
        <div className={styles.textField}>
            <input className={styles.inputField} placeholder={"Поиск"} type={'text'} />
        </div>
    </div>
}
