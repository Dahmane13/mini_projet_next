"use client";
import { FormEvent, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import axios from "axios";

function page() {
  const [formData, setFormData] = useState<Object>({
    firstname: "",
    lastname: "",
    specialty: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
  });
  const handelSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3000/api/doctors", formData)
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <main className="bg-white p-7 rounded-lg flex flex-col gap-6">
      <h1 className="text-2xl">Join our doctors</h1>
      <form className="flex flex-col gap-8" onSubmit={(e) => handelSubmit(e)}>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">Personal info</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <div className="flex-1">
                <label>Firstname</label>
                <Input
                  placeholder="Your firstname"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      firstname: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex-1">
                <label>Lastname</label>
                <Input
                  placeholder="Your lastname"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      lastname: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-1">
                <label>Specialty</label>
                <Input
                  placeholder="Your Specialty"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      specialty: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex-1">
                <label>Gender</label>
                <Select
                  onValueChange={(val) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      gender: val,
                    }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">Contact info</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <div className="flex-1">
                <label>Email</label>
                <Input
                  placeholder="Your Email"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex-1">
                <label>Phone</label>
                <Input
                  placeholder="Your phone"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      phone: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-1">
                <label>Address1</label>
                <Input
                  placeholder="Your Address"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      address: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex-1">
                <label>Address2</label>
                <Input placeholder="Your Address" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">Biography</h2>
          <div className="flex-1">
            <Textarea
              placeholder="Write somthing about yourself"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  bio: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <Button type="submit" className="bg-primaryColor w-fit">
          Submit
        </Button>
      </form>
    </main>
  );
}

export default page;
