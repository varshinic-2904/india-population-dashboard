import { useMemo, useState } from "react";

import styles from "./dashboard.module.css";

import SearchBar from "../components/searchBar";
import StatsCard from "../components/statsCard";
import PopulationChart from "../components/populationChart";

import { populationData } from "../data/populationData";
import ThemeToggle from "../components/themeToggle";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredData = populationData.filter(
    (item) =>
      item.state
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const totalPopulation = populationData.reduce(
    (sum, item) => sum + item.population,
    0
  );

  const highestState = useMemo(() => {
    return populationData.reduce((prev, current) =>
      prev.population > current.population
        ? prev
        : current
    );
  }, []);

  const averagePopulation = (
    totalPopulation / populationData.length
  ).toFixed(0);

  return (
    <div className={styles.dashboard}>
      <div className={styles.headerRow}>
        <div className={styles.hero}>
          <h1>
            India Population Dashboard
          </h1>

          <p>
            Interactive analytics and insights
            on Indian state populations.
          </p>
        </div>
        
        <ThemeToggle />
      </div>

      <div className={styles.statsGrid}>
        <StatsCard
          title="Total Population"
          value={totalPopulation.toLocaleString()}
        />

        <StatsCard
          title="States"
          value={populationData.length.toString()}
        />

        <StatsCard
          title="Highest Population"
          value={highestState.state}
        />

        <StatsCard
          title="Average Population"
          value={Number(
            averagePopulation
          ).toLocaleString()}
        />
      </div>

      <div className={styles.searchContainer}>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      <PopulationChart data={filteredData} />
    </div>
  );
}