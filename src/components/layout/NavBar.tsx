"use client";
import Image from "next/image";
import Logo from "@/assets/icons/bed_bureau_icon.svg";
import { useState } from "react";
import ProfileSection from "./ProfileSection";
import { Button } from "../ui/button";
import LogoutIcon from "@/assets/icons/logout.svg";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const [toggleTab, setToggleTab] = useState(pathname);
  return (
    <div className="flex border h-18 bg-white">
      <div className="border-r w-70 flex justify-end px-8 items-center">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="flex-1 flex justify-between items-center  ">
        <div className="flex gap-4 px-5">
          <Button
            variant={toggleTab === "/manage-client" ? "navBtnActive" : "navBtn"}
            onClick={() => {
              setToggleTab("/manage-client");
              router.push("/manage-client");
            }}
          >
            Manage Client
          </Button>
          <Button
            variant={
              toggleTab === "/update-profile" ? "navBtnActive" : "navBtn"
            }
            onClick={() => {
              setToggleTab("/update-profile");
              router.push("/update-profile");
            }}
          >
            Update Profile
          </Button>
          <Button
            variant={
              toggleTab === "/reset-password" ? "navBtnActive" : "navBtn"
            }
            onClick={() => {
              setToggleTab("/reset-password");
              router.push("/reset-password");
            }}
          >
            Reset Password
          </Button>
        </div>
        <div className="flex items-center">
        <Button className="mx-5" variant="navBtn"><Image src={LogoutIcon} alt="Logout" /> Logout</Button>
        <div className="h-8 bg-[#DCDFE9] w-[1px]"/>
        </div>
      </div>
      <ProfileSection />
    </div>
  );
}
