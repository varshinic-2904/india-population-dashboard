import styles from "./searchBar.module.css";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search state..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}