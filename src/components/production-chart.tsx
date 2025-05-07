import { FC } from "react";
import { ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid } from "recharts"
import type { ChartConfig } from "@/components/ui/chart";

const chartData = [
  {
    name: "Крым",
    value: 1400,
    color: "#ce9e33",
  },
  {
    name: "Херсон",
    value: 1600,
    color: "#a47b29",
  },
  {
    name: "Запорожье",
    value: 1700,
    color: "#7a5c1f",
  },
  {
    name: "ДНР и ЛНР",
    value: 820,
    color: "#503e15",
  },
];

const chartConfig = {
} satisfies ChartConfig;

const ProductionChart: FC = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default ProductionChart;
