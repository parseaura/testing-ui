import Navigation from "./Navigation";
import logo from "../../../assets/Logo.svg";
import userpic from "../../../assets/userpic.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a
        href=""
        className={styles.headerLogo}
      >
        <img
          src={logo}
          alt=""
        />
      </a>
      <Navigation />
      <div className={styles.userWidget}>
        <img
          src={userpic}
          alt="Userpic"
        />
        <span>Lina</span>
      </div>
    </header>
  );
}
