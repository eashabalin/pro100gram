import GoBack from "@/components/ui/goback/goback-component";
import MainProfile from "@/components/profile/main_profile/main-profile-component";
import styles from "@/app/my_profile/my-profile.module.scss"
import UsernameDescriptionComponent from "@/components/profile/username_description/username-description-component";
import ButtonComponent from "@/components/ui/button/button-component";
import GalleryComponent from "@/components/profile/gallery/gallery-component";

export default function MyProfile() {

    interface IAction {
        styles: string,
        label: string
    }

    const actionsButton: {settings: IAction, subscribe: IAction, unsubscribe: IAction} = {
        settings: {styles: styles.settings_button, label: "Настройка профиля"},
        subscribe: {styles: styles.subscribe_button, label: "Подписаться"},
        unsubscribe: {styles: styles.unsubscribe_button, label: "Отписаться"},
    }
    const action: IAction = actionsButton.settings

    return <div className={styles.container}>
        <GoBack>ghostfantik</GoBack>
        <MainProfile imageSrc="/my_profile/main_photo.png" width={82} height={82}></MainProfile>
        <UsernameDescriptionComponent username={"Egor Drushchenko"} description={"VK Middle"} />
        <div className={styles.action_button}><ButtonComponent className={action.styles} label={action.label} /></div>
        <GalleryComponent pictures={["/photo1.png", "/photo1.png", "/photo1.png", "/photo1.png"]}></GalleryComponent>
    </div>
}