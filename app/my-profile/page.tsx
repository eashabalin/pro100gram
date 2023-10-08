import Image from 'next/image'
import styles from './styles.module.css'

export default function Home() {
  return (
      <header className={styles.header}>
        <div className={styles.navBar}>
          <button><Image src="/my_profile/back_icon.svg" width={10} height={18} alt="назад"/></button>
          <span className={styles.profile__name}>ghostfantik</span>
        </div>
        <div className={styles.profile}>
          <div className={styles.profile__top}>
            <div className={styles.profile__counter}>
              <div className={styles.value}>5000</div>
              <div className={styles.label}>Подписки</div>
            </div>
            <Image src="/my_profile/man.png" alt="Фото профиля" width="82" height="82" className={styles.profile__photo}/>
              <div className={styles.profile__counter}>
                <div className={styles.value}>500</div>
                <div className={styles.label}>Подписчики</div>
              </div>
          </div>
          <div className={styles.profile__info}>
            <div className={styles.profile__name}>Егор Друщенко</div>
            <div className={styles.profile__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              aspernatur repellat.</div>
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.buttonSettings}>Настройка профиля</button>
        </div>
      </header>
  )
}
