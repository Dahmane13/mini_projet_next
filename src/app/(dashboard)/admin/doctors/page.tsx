import { docColumns } from "@/app/components/dashboard/dataTable/columns";
import { Button } from "../../../../../components/ui/button";
import { DataTable } from "@/app/components/dashboard/dataTable/data-table";
const getDoctor = async () => {
  const res = await fetch("http://localhost:3000/api/doctors");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
async function page() {
  const data = await getDoctor();
  return (
    <main className=" flex flex-col gap-4 flex-auto p-7 overflow-y-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Doctors</h1>
        <Button className="bg-primaryColor">Create</Button>
      </div>
      <div className=" bg-white container mx-auto py-7 flex flex-col gap-4">
        <h2>All Doctors</h2>
        <DataTable columns={docColumns} data={data.doctors} />
      </div>
    </main>
  );
}

export default page;
