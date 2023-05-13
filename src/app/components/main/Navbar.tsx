"use client";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import Logo from "./Logo";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

function NavBar() {
  return (
    <div className=" bg-main flex justify-between px-7 py-2 rounded-lg">
      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <Logo />
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-4 ">
            <NavigationMenuItem>Find a doctor</NavigationMenuItem>
            <NavigationMenuItem>Join us</NavigationMenuItem>
            <NavigationMenuItem>About</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-6 items-center">
        <span className=" cursor-pointer" onClick={() => signIn()}>
          Login
        </span>

        <Link href={"/register"}>
          <Button variant="outline" className="bg-primaryColor text-white">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
