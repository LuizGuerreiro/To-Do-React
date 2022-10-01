import rocket from "../assets/rocket.svg";

import styles from '../../public/styles/Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Foguete colorido" />
      <h1>to<span>do</span></h1>
    </header>
  )
}