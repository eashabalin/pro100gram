import styles from "@/app/search/search.module.scss"
import GoBack from "@/components/ui/goback/goback-component";
import SearchFieldComponent from "@/components/ui/search_field/search-field-component";
import {FC} from "react";
import UserLabel from "@/components/ui/userlabel/userlabel-component";
import Image from "next/image";

export default function SearchPage() {
    return <div className={styles.content}>
        <GoBack>Поиск</GoBack>
        <div className={styles.search}><SearchFieldComponent></SearchFieldComponent></div>
        <div className={styles.list}>
            <div className={styles.listLabel}>Люди</div>
            <hr/>
            <RowComponent
                username={"ghostfantik"}
                fullname={"Egor Drushchenko"}
                imgsrc={"/avatar1.JPG"}
            ></RowComponent>
            <RowComponent
                username={"ghostfantik"}
                fullname={"Egor Drushchenko"}
                imgsrc={"/avatar1.JPG"}
            ></RowComponent>
            <RowComponent
                username={"ghostfantik"}
                fullname={"Egor Drushchenko"}
                imgsrc={"/avatar1.JPG"}
            ></RowComponent>
            <hr className={styles.hr_end}/>
            <div className={styles.listLabel}>Сообщества</div>
            <hr/>
            <RowComponent
                username={"ghostfantik"}
                fullname={"Egor Drushchenko"}
                imgsrc={"/avatar1.JPG"}
            ></RowComponent>
            <hr/>
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
            <UserLabel title={username} subtitle={fullname} imgsrc={imgsrc}></UserLabel>
        </div>
        <div className={styles.right}>
            <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16}
                   height={16}></Image>
        </div>

    </>
}