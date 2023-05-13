"use client";

import Logo from "@/app/components/main/Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Locate, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="flex items-center gap-6 py-8 text-foreground">
      <div className="flex w-[80rem]  flex-col gap-4 ">
        <Logo />
        <NavigationMenu>
          <NavigationMenuList className="gap-4 text-sm">
            <NavigationMenuItem>Find a doctor</NavigationMenuItem>
            <NavigationMenuItem>Join us</NavigationMenuItem>
            <NavigationMenuItem>About</NavigationMenuItem>
            <NavigationMenuItem>Login</NavigationMenuItem>
            <NavigationMenuItem>Register</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <span>All right reserved 2023</span>
      </div>
      <div className="w-[70rem] flex flex-col gap-4">
        <div className="flex items-center gap-2 ">
          <Locate className="p-1 bg-foreground rounded-full text-white" />
          <span>400 free street,newyork,usa</span>
        </div>
        <div className="flex items-center gap-2 ">
          <Phone className="p-1 bg-foreground rounded-full text-white" />
          <span>0555555555</span>
        </div>
        <div className="flex items-center gap-2 ">
          <Mail className="p-1 bg-foreground rounded-full text-white" />
          <span>health@health.com</span>
        </div>
      </div>
      <div className="flex  flex-col gap-4 ">
        <h1>About us</h1>
        <p>
          At our core, we are committed to providing the highest level of care
          and service to our patients. We believe that everyone deserves access
          to quality healthcare, and we are passionate about helping you achieve
          your health goals.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
