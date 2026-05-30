import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import styles from "./populationChart.module.css";

type Props = {
  data: {
    state: string;
    population: number;
  }[];
};

export default function PopulationChart({
  data,
}: Props) {
  const chartColor =
  getComputedStyle(
    document.documentElement
  ).getPropertyValue("--primary");

  return (
    <div className={styles.chartContainer}>
      <h2>Population by State</h2>

      <ResponsiveContainer
        width="100%"
        height={450}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="state" />

          <YAxis
            width={80}
            tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
           />

          <Tooltip
            formatter={(value) => [`${Number(value).toLocaleString()}`, "Population"]}
          />

          <Bar
            dataKey="population"
            fill={chartColor}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}