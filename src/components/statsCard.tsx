import styles from "./statsCard.module.css";

type Props = {
  title: string;
  value: string;
};

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}