import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

function News() {
  return (
    <div className=" flex justify-center">
      <div className="p-10 w-[50rem] bg-primaryColor rounded-lg text-white flex flex-col items-center gap-6">
        <div className=" text-center">
          <h1 className="text-3xl font-medium">
            Subscribe for an news <br /> update from health
          </h1>
        </div>
        <div className="flex gap-2 w-[35rem] ">
          <Input className="bg-white" placeholder="Enter your email" />
          <Button className="bg-[#035380]">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}

export default News;
