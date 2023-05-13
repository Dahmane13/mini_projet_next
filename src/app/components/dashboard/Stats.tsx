import { adminStatsArray } from "@/lib/arrays";
import StatCard from "./StatCard";

function Stats({ data }: { data: number[] }) {
  return (
    <div className="flex gap-4 w-full">
      {adminStatsArray.map((item, index) => (
        <StatCard data={item} key={item.id} value={data[index]} />
      ))}
    </div>
  );
}

export default Stats;
