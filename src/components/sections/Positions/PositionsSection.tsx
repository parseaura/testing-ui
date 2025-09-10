import { positions } from "../../../data/positions";
import PositionsCard from "./PositionsCard";
import styles from "./PositionsSection.module.css";

export default function PositionsSection() {
  const handleTeacherClick = () => {
    console.log("Apply as Teacher clicked");
  };

  const handleCounselorClick = () => {
    console.log("Apply as Counselor clicked");
  };

  return (
    <section className={styles.section}>
      <PositionsCard
        {...positions[0]}
        onButtonClick={handleTeacherClick}
      />
      <PositionsCard
        {...positions[1]}
        onButtonClick={handleCounselorClick}
      />
    </section>
  );
}
