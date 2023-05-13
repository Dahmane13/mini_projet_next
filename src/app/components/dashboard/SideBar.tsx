"use client";
import { LogOut, PieChart, User, UserPlus, Users } from "lucide-react";

function SideBar() {
  return (
    <div className="w-[22rem] h-screen bg-main py-10 ">
      <div className="flex h-full flex-col justify-between pl-5">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <PieChart />
            <span>Dashboard</span>
          </div>
          <div className="flex gap-2 items-center">
            <Users />
            <span>Doctors</span>
          </div>
          <div className="flex gap-2 items-center">
            <UserPlus />
            <span>Requests</span>
          </div>
          <div className="flex gap-2 items-center">
            <User />
            <span>Profile</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <LogOut />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
