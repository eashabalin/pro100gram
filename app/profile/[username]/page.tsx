import GoBack from "@/components/ui/goback/goback-component";
import MainProfile from "@/components/profile/main_profile/main-profile-component";
import styles from "@/app/profile/[username]/my-profile.module.scss"
import UsernameDescriptionComponent from "@/components/profile/username_description/username-description-component";
import ButtonComponent from "@/components/ui/button/button-component";
import GalleryComponent, {PictureProp} from "@/components/profile/gallery/gallery-component";
import ButtonLinkComponent from "@/components/ui/button_link/button-link-component";
import {Posts} from "@/entities/post.entity";
import {getUser} from "@/services/user/user.service";
import globalConfig from "@/config";
import {getUserPosts} from "@/services/post/post.service";

interface IAction {
    styles: string,
    label: string
}

const actionsButton: {settings: IAction, subscribe: IAction, unsubscribe: IAction} = {
    settings: {styles: styles.settings_button, label: "Настройка профиля"},
    subscribe: {styles: styles.subscribe_button, label: "Подписаться"},
    unsubscribe: {styles: styles.unsubscribe_button, label: "Отписаться"},
}

export default async function MyProfile({ params }: {params: {username: string}}) {
    const user = await getUser(params.username)
    const action: IAction = globalConfig.currentUsername == params.username ?
        actionsButton.settings : actionsButton.subscribe

    const posts = await getUserPosts(params.username)
    return <div className={styles.container}>
        <GoBack>{user.username}</GoBack>
        <MainProfile imageSrc={user.avatarSrc} width={82} height={82}
                     subscriptionsCount={user.subscriptionsCount}
                     subscribersCount={user.subscribersCount}
                     username={params.username}
        />
        <UsernameDescriptionComponent username={user.fullName} description={user.bio} />
        <div className={styles.action_button}>
            <ButtonLinkComponent href={"/profile_settings"} label={action.label} />
        </div>
        <GalleryComponent pictures={posts.map<PictureProp>((post):PictureProp => {
            return {username: post.authorUserName, id: post.id, imgsrc: post.imgSrc}
        })}></GalleryComponent>
    </div>
}