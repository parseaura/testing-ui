import { pricingPlans } from "../../../data/pricing";
import PricingCard from "./PricingCard";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>Affordable pricing</h2>
      </div>

      <div className={styles.cardsGrid}>
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
          />
        ))}
      </div>
    </section>
  );
}
