import styles from "./OnlineCoaching.module.css";

export default function OnlineCoaching() {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>
        Online coaching lessons for remote learning.
      </h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
        suscipit beatae quod, nulla voluptatibus tenetur rerum doloribus ex
        exercitationem ipsa ipsam, dicta quos accusantium illum mollitia omnis
        illo laborum.
      </p>
      <button className={styles.button}>Start learning now</button>
    </section>
  );
}
