import React from "react";
type Tdata = {
  id: number;
  title: string;
  bg: string;
};
function StatCard({ data, value }: { data: Tdata; value: number }) {
  return (
    <div
      className={`flex-1 px-3 py-4 flex flex-col items-center text-white rounded-lg gap-2`}
      style={{ backgroundColor: data.bg }}
    >
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-xl">{data.title}</span>
    </div>
  );
}

export default StatCard;
