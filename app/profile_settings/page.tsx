"use client";

import styles from './profile-settings.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import GoBack from '@/components/ui/goback/goback-component';
import Image from 'next/image';

export default function ProfileSettings() {
  return (
    <div className={styles.content}>
      <GoBack>Настройки профиля</GoBack>
      <div className={styles.photoBlock}>
        <Image className={styles.photo} src={"/avatar1.JPG"} width={82} height={82} alt="фото профиля"></Image>
        <div className={styles.changePhotoBtn}>Изменить фото</div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.property}>Имя</div>
        <div className={styles.value}>Егор Шабалин</div>
        <div className={styles.property}>Имя пользователя</div>
        <div className={styles.value}>ldt.1</div>
        <div className={styles.property}>Пол</div>
        <div className={styles.value}>Мужской</div>
        <div className={styles.property}>О себе</div>
        <div className={styles.value}>Два плюс два равно пять тыщ</div>
      </div>
    </div>
  )
}
