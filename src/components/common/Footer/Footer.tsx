import logo from "../../../assets/Logo.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img
          src={logo}
          alt="Logo"
          className={styles.logo}
        />
        <span className={styles.moto}>Virtual Class for Zoom</span>
      </div>
      <div className={styles.newsletter}>
        <h3 className={styles.title}>Subscribe to get our Newsletter</h3>
        <form
          action="post"
          className={styles.form}
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={styles.input}
          />
          <button
            type="submit"
            className={styles.button}
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className={styles.bottom}>
        <div className={styles.links}>
          <a
            href="/"
            className={styles.link}
          >
            Careers
          </a>
          <a
            href="/"
            className={styles.link}
          >
            Privacy Policy
          </a>
          <a
            href="/"
            className={styles.link}
          >
            Terms & Conditions
          </a>
        </div>
        <div className={styles.copyright}>© 2021 Class Technologies Inc.</div>
      </div>
    </footer>
  );
}
