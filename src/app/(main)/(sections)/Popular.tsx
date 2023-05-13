import Image from "next/image";
import { Plus } from "lucide-react";
import { popularArray } from "@/lib/arrays";

function Popular() {
  return (
    <div className="p-7">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Popular Searches on Health</h1>
        <div className="flex justify-between ">
          {popularArray.map((item) => (
            <div className=" cursor-pointer flex flex-col justify-center items-center gap-2 rounded-lg bg-white px-10 py-4">
              <Image alt="specIcon" src={item.icon} width={100} height={100} />
              {item.title}
            </div>
          ))}
          <div className="cursor-pointer flex flex-col justify-center items-center gap-2 rounded-lg bg-main px-10 py-4">
            <Plus size={48} />
            Show More
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
