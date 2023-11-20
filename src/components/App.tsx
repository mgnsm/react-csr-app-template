import styles from "./App.module.css";

export default function App() {
  return (
    <div className={`${styles.red} ${styles.large}`}>
      Hello React world!
    </div>
  );
}