import type { PricingPlan } from "../../../types/pricing";
import tick from "../../../assets/Tick.svg";
import personEmoji from "../../../assets/personEmoji.svg";
import peopleEmoji from "../../../assets/peopleEmoji.svg";
import styles from "./PricingCard.module.css";

interface PricingCardProps {
  plan: PricingPlan;
}
export default function PricingCard({ plan }: PricingCardProps) {
  const emoji =
    plan.name === "Individual"
      ? personEmoji
      : plan.name === "Corporate"
      ? peopleEmoji
      : "";

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.planName}>
          {emoji && (
            <img
              src={emoji}
              style={{ height: 18 }}
            />
          )}
          {plan.name}
          {plan.isPopular && <span className={styles.bestPlan}>Best!</span>}
        </h3>
        <div className={styles.priceContainer}>
          {plan.id === "free" ? null : (
            <span className={styles.currency}>$</span>
          )}

          <span className={styles.price}>{plan.price}</span>
          <span className={styles.period}>{plan.period}</span>
        </div>
      </div>

      <ul className={styles.features}>
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className={styles.feature}
          >
            <span
              className={`${styles.checkIcon} ${styles[plan.featuresVariant]}`}
            >
              <img
                src={tick}
                alt=""
              />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button className={`${styles.button} ${styles[plan.buttonVariant]}`}>
        {plan.buttonText}
      </button>
    </div>
  );
}
