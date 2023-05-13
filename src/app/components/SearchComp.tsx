import { Search } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { searchSpc } from "@/lib/arrays";

function SearchComp() {
  return (
    <div className="bg-white w-[50rem] rounded-lg">
      <div className="flex gap-4 p-4 items-center">
        <Input placeholder="Search by specialty" className=" border-gray-300" />
        <Input placeholder="Location" />
        <Button className="bg-primaryColor text-white">
          <Search />
        </Button>
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h2 className="text-xl">you may looking for</h2>
        <div className="flex gap-4">
          {searchSpc.map((item) => (
            <span className="bg-gray-100 px-3 py-2 rounded-lg" key={item.id}>
              {item.title}
            </span>
          ))}
          <span className="bg-secondBg px-3 py-2 rounded-lg">show more...</span>
        </div>
      </div>
    </div>
  );
}

export default SearchComp;
