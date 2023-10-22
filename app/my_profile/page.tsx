import GoBack from "@/components/ui/goback/goback-component";
import MainProfile from "@/components/profile/main_profile/main-profile-component";
import styles from "@/app/my_profile/my-profile.module.scss"
export default function MyProfile() {
    return <div className={styles.container}>
        <GoBack>GhostFantik</GoBack>
        <MainProfile imageSrc="/my_profile/main_photo.png" width={82} height={82}></MainProfile>
    </div>
}