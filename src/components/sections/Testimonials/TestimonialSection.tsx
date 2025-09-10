import { testimonials } from "../../../data/testimonials";
import type { Testimonial } from "../../../types/testimonials";
import TestimonialCard from "./TestimonialCard";
import arrow from "../../../assets/arrow.svg";
import styles from "./TestimonialSection.module.css";

export default function TestimonialSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What our students have to say</h2>

      <div className={styles.cardsContainer}>
        <button
          className={styles.button}
          onClick={() => {}}
        >
          <img
            src={arrow}
            className={`${styles.arrowLeft} ${styles.arrow}`}
          />
        </button>
        <ul className={styles.cards}>
          {testimonials.map((testimonial: Testimonial) => (
            <li
              key={testimonial.id}
              className={styles.card}
            >
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
        <button
          className={styles.button}
          onClick={() => {}}
        >
          <img
            src={arrow}
            className={`${styles.arrowRight} ${styles.arrow}`}
          />
        </button>
      </div>
    </section>
  );
}
