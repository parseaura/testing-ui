import styles from "./PositionsCard.module.css";

interface AppCardProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  onButtonClick?: () => void;
}

export default function PositionsCard({
  title,
  description,
  buttonText,
  image,
  onButtonClick,
}: AppCardProps) {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={title}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <button
        onClick={onButtonClick}
        className={styles.button}
      >
        {buttonText}
      </button>
    </div>
  );
}
