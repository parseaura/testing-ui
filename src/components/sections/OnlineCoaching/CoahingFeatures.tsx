import { useState } from "react";
import styles from "./CoachingFeatures.module.css";
import arrow from "../../../assets/arrow.svg";

interface FeatureItem {
  id: string;
  title: string;
  content: string;
}

const features: FeatureItem[] = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    title: "Consectetur adipiscing elit, sed do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    title: "Eiusmod tempor lorem ipsum",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: "4",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: "5",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function CoachingFeatures() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Online coaching lessons for remote learning
      </h2>

      <div className={styles.accordion}>
        {features.map((feature) => (
          <div className={styles.item}>
            <button
              className={`${styles.button} ${
                openItem === feature.id ? styles.active : ""
              }`}
              onClick={() => toggleOpen(feature.id)}
            >
              <span className={styles.accordionTitle}>{feature.title}</span>
              <img
                src={arrow}
                className={styles.icon}
              />
            </button>

            <div
              className={`${styles.accordionContent} ${
                openItem === feature.id ? styles.open : ""
              }`}
            >
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
