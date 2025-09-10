import type { Testimonial } from "../../../types/testimonials";
import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      <img
        src={testimonial.avatar}
        alt={`${testimonial.name}'s avatar`}
        className={styles.avatar}
      />
      <h3 className={styles.name}>{testimonial.name}</h3>
      <p className={styles.content}>{testimonial.content}</p>
    </div>
  );
}
