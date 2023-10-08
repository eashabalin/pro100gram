import Image from 'next/image'
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.content}>
    <div className={styles.post}>
        <div className={styles.post_user}>
            <span className={styles.post_user_avatar}>
                <Image src="/avatar1.JPG" width={35} height={35} alt="avatar"/>
            </span>
            <div className={styles.post_user_text}>
                <div className={styles.post_user_text_name}>ldt.1</div>
                <div className={styles.post_user_text_date}>5 часов назад</div>
            </div>
        </div>
        <div className={styles.post_photo}>
          <Image
            alt='photo'
            src="/photo1.JPG"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%', aspectRatio: 1, objectFit: 'cover' }} // optional
          />
        </div>
        <div className={styles.post_actions}>
            <span className={styles.post_actions_basic}>
                <span className={styles.post_actions_basic_like}>
                    <div className={styles.post_actions_basic_img}>
                      <Image
                        alt='like'
                        src="/like.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '22px', height: 'auto' }}
                      />
                    </div>
                    <span>73</span>
                </span>
                <span className={styles.post_actions_basic_comment}>
                    <div className={styles.post_actions_basic_img}>
                      <Image
                        alt='comment'
                        src="/comment.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '22px', height: 'auto' }}
                      />
                    </div>
                    <span>4</span>
                </span>
            </span>
            <span className={styles.post_actions_other}>
                <span className={styles.post_actions_other_respect}>
                    <div className={styles.post_actions_other_img}>
                      <Image
                        alt='respect'
                        src="/respect.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ height: '22px', width: 'auto' }}
                      />
                    </div>
                </span>
                <span className={styles.post_actions_other_respect}>
                    <div className={styles.post_actions_other_img}>
                      <Image
                        alt='disrespect'
                        src="/disrespect.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ height: '22px', width: 'auto' }}
                      />
                    </div>
                </span>
            </span>
        </div>
        <div className={styles.post_text}>
            Круто покушал стейк, было очень вкусно) Жаль, без ботинка :( Приглашаю всех на ужин! 
        </div>
    </div>



    <div className={styles.post}>
        <div className={styles.post_user}>
            <span className={styles.post_user_avatar}>
                <Image src="/avatar2.jpeg" width={35} height={35} alt="avatar"/>
            </span>
            <div className={styles.post_user_text}>
                <div className={styles.post_user_text_name}>ghostfantik</div>
                <div className={styles.post_user_text_date}>19 часов назад</div>
            </div>
        </div>
        <div className={styles.post_photo}>
          <Image
            alt='photo'
            src="/photo2.JPG"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%', aspectRatio: 1, objectFit: 'cover' }}
          />
        </div>
        <div className={styles.post_actions}>
            <span className={styles.post_actions_basic}>
                <span className={styles.post_actions_basic_like}>
                    <div className={styles.post_actions_basic_img}>
                      <Image
                        alt='like'
                        src="/like.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '22px', height: 'auto' }}
                      />
                    </div>
                    <span>80</span>
                </span>
                <span className={styles.post_actions_basic_comment}>
                    <div className={styles.post_actions_basic_img}>
                      <Image
                        alt='comment'
                        src="/comment.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '22px', height: 'auto' }}
                      />
                    </div>
                    <span>1</span>
                </span>
            </span>
            <span className={styles.post_actions_other}>
                <span className={styles.post_actions_other_respect}>
                    <div className={styles.post_actions_other_img}>
                      <Image
                        alt='respect'
                        src="/respect.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ height: '22px', width: 'auto' }}
                      />
                    </div>
                </span>
                <span className={styles.post_actions_other_respect}>
                    <div className={styles.post_actions_other_img}>
                      <Image
                        alt='disrespect'
                        src="/disrespect.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ height: '22px', width: 'auto' }}
                      />
                    </div>
                </span>
            </span>
        </div>
        <div className={styles.post_text}>
            Осень наступает 
        </div>
    </div>
</div>
  )
}
