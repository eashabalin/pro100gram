"use client";

import styles from './subscribers.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import GoBack from '@/components/ui/goback/goback-component';
import SearchField from '@/components/ui/search_field/search-field-component';
import UserLabel from '@/components/ui/userlabel/userlabel-component';
import Image from 'next/image';

export default function ProfileSettings() {
  return (
    <div className={styles.content}>
      <GoBack>Подписчики</GoBack>
      <div className={styles.search}>
        <SearchField/>
      </div>
      <div className={styles.list}>
        <UserLabel title={'ghostfantik'} subtitle={'Egor Druschenko'} imgsrc={'/avatar2.jpeg'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ldt.1'} subtitle={'Егор Шабалин'} imgsrc={'/avatar1.JPG'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ghostfantik'} subtitle={'Egor Druschenko'} imgsrc={'/avatar2.jpeg'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ldt.1'} subtitle={'Егор Шабалин'} imgsrc={'/avatar1.JPG'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ghostfantik'} subtitle={'Egor Druschenko'} imgsrc={'/avatar2.jpeg'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ldt.1'} subtitle={'Егор Шабалин'} imgsrc={'/avatar1.JPG'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ghostfantik'} subtitle={'Egor Druschenko'} imgsrc={'/avatar2.jpeg'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ldt.1'} subtitle={'Егор Шабалин'} imgsrc={'/avatar1.JPG'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ghostfantik'} subtitle={'Egor Druschenko'} imgsrc={'/avatar2.jpeg'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ldt.1'} subtitle={'Егор Шабалин'} imgsrc={'/avatar1.JPG'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ghostfantik'} subtitle={'Egor Druschenko'} imgsrc={'/avatar2.jpeg'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ldt.1'} subtitle={'Егор Шабалин'} imgsrc={'/avatar1.JPG'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ghostfantik'} subtitle={'Egor Druschenko'} imgsrc={'/avatar2.jpeg'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
        <UserLabel title={'ldt.1'} subtitle={'Егор Шабалин'} imgsrc={'/avatar1.JPG'}/>
        <Image className={styles.deleteIcon} src={'/icons/cross-circle.svg'} alt={'Удалить'} width={16} height={16}></Image>
      </div>
    </div>
  )
}
