import { useTheme } from "../context/themeContext";

import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.button}
    >
      {theme === "light"
        ? "🌙 Dark"
        : "☀️ Light"}
    </button>
  );
}