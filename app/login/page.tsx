"use client";

import styles from './login.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import TextField from '@/components/ui/text_field/text_field-component';
import Button from '@/components/ui/button/button-component';
import PasswordField from '@/components/ui/password_field/password_field-component';
import GoBack from '@/components/ui/goback/goback-component';

export default function Home() {
  return (
    <div className={styles.content}>
      <GoBack>Вход</GoBack>
      <div className={styles.loginForm}>
        <TextField placeholder="Имя пользователя, телефон или эл. адрес"/>
        <PasswordField placeholder="Пароль"/>
        <a href="" className={styles.forgotPassword}>Забыли пароль?</a>
        <div className={styles.btn}>
          <Button label="Войти"></Button>
        </div>
        <div className={styles.signUpText}>
          <span>Нет аккаунта? </span>
          <a href="" className={styles.signUpButton}>Зарегистрируйтесь</a>
        </div>
      </div>
    </div>
  )
}
