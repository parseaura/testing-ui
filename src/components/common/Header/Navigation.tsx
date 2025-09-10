import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Courses</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
      </ul>
    </nav>
  );
}
