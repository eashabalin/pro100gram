import GoBack from "@/components/ui/goback/goback-component";
import SearchFieldComponent from "@/components/ui/search_field/search-field-component";
import styles from "@/app/profile/[username]/subscribers/subscribers.module.scss"
import {FC} from "react";
import UserLabel from "@/components/ui/userlabel/userlabel-component";
import Image from "next/image";
import {getUser} from "@/services/user/user.service";

export default async function SubscribersPage({params}: {params: { username: string }}) {
    const user = await getUser(params.username)
    return <div className={styles.content}>
        <div><GoBack>Подписчики</GoBack></div>
        <div className={styles.search}><SearchFieldComponent></SearchFieldComponent></div>

        <div className={styles.list}>
            {user.subscribers.map((v) =>
                <RowComponent username={v.username}
                              fullname={v.fullName}
                              imgsrc={v.avatarSrc}
                              key={`${v.fullName}${v.username}`}
                ></RowComponent>)}
        </div>
    </div>
}

const RowComponent: FC<{
    username: string,
    fullname: string,
    imgsrc: string
}> = ({username, fullname, imgsrc}) => {
    return <>
        <div className={styles.left}>
            <UserLabel title={username} subtitle={fullname} imgsrc={imgsrc}  ></UserLabel>
        </div>
        <div className={styles.right}>
            <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        </div>

    </>
}