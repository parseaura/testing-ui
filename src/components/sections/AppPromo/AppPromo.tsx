import android from "../../../assets/android.svg";
import ios from "../../../assets/ios.svg";
import styles from "./AppPromo.module.css";

export default function AppPromo() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>APP is available for free</h2>
      <a
        href="/"
        target="_blank"
        className={`${styles.link} ${styles.android}`}
      >
        <img
          src={android}
          alt=""
        />
        <span>Android APP</span>
      </a>
      <a
        href="/"
        target="_blank"
        className={`${styles.link} ${styles.ios}`}
      >
        <img
          src={ios}
          alt=""
        />
        <span>IOS APP</span>
      </a>
    </section>
  );
}
