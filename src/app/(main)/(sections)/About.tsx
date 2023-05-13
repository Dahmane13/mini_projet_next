import Image from "next/image";
import { Button } from "../../../../components/ui/button";

function About() {
  return (
    <div className="bg-main h-[23rem] p-7 flex overflow-hidden rounded-lg">
      <div className="flex-1">
        <Image
          alt="doctor"
          src={"/assets/doctor2.png"}
          width={600}
          height={100}
        />
      </div>
      <div className="flex-1 text-text flex flex-col justify-center gap-6">
        <h1 className=" text-4xl font-bold tracking-wide">
          Reach more patients
        </h1>
        <p className="text-lg">
          Our website is dedicated to helping doctors expand their reach and
          connect with a larger number of patients. By creating an account on
          our platform, doctors can gain access to a range of tools and
          resources that will help them grow their practice and attract new
          patients.
        </p>
        <div className=" flex gap-2 items-center">
          <Button className="bg-primaryColor">Join US</Button>
          <span>learn more...</span>
        </div>
      </div>
    </div>
  );
}

export default About;
