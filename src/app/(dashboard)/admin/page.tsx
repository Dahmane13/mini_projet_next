import Stats from "@/app/components/dashboard/Stats";
import { docColumns } from "@/app/components/dashboard/dataTable/columns";
import { DataTable } from "@/app/components/dashboard/dataTable/data-table";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/adminDash");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
export default async function Home() {
  const data = await getData();
  console.log(data);
  const doctors = [
    {
      id: "doc123",
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@example.com",
      phone: "+1-555-123-4567",
      specialty: "Cardiology",
    },
    {
      id: "doc456",
      firstname: "Jane",
      lastname: "Smith",
      email: "janesmith@example.com",
      phone: "+1-555-234-5678",
      specialty: "Pediatrics",
    },
    {
      id: "doc789",
      firstname: "Mark",
      lastname: "Johnson",
      email: "markjohnson@example.com",
      phone: "+1-555-345-6789",
      specialty: "Oncology",
    },
  ];
  return (
    <main className=" flex flex-col gap-4 flex-auto p-7 overflow-y-auto">
      <h1 className="text-2xl">Dashboard</h1>
      <Stats data={data.stats} />
      <div className=" bg-white container mx-auto py-7 flex flex-col gap-4">
        <h2>Resent requests</h2>
        <DataTable columns={docColumns} data={data.requests} />
      </div>
    </main>
  );
}
