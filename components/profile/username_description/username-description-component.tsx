import React from "react";
import styles from "@/components/profile/username_description/username-description.module.scss"

interface IProps {
    username: string
    description: string
}

const UsernameDescriptionComponent: React.FC<IProps> = ({username, description}) => {
    return <div className={styles.content}>
        <p className={styles.username}>{username}</p>
        <p className={styles.description}>{description}</p>
    </div>
}

export default UsernameDescriptionComponent