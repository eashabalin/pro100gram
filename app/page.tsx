"use client";

import styles from '@/app/styles.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Post from '@/components/ui/post/post-component';

export default function Home() {
  return (
    <div className={styles.content}>

      <div className={styles.posts}>
        <Post 
          username={'ldt.1'} 
          subtitle={'5 часов назад'} 
          imgsrcs={['/photo1.png', '/photo2.JPG']}
          userAvatarSrc={'/avatar1.JPG'} 
          description={'Чтобы не забыть!'}
          likesNumber={88} 
          commentsNumber={2}
        />

        <Post 
          username={'ghostfantik'} 
          subtitle={'19 часов назад'} 
          imgsrcs={['/photo2.JPG']} 
          userAvatarSrc={'/avatar2.jpeg'} 
          description={'Осень наступает'} 
          likesNumber={78} 
          commentsNumber={3}
        />
      </div>

    </div>
  )
}
