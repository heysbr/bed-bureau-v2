import Image from "next/image";
import ProfileLogo from "@/assets/icons/profile_photo.svg";
export default function ProfileSection() {
  return (
    <div className="flex w-70 mx-5 items-center  ">
      <Image src={ProfileLogo} alt="Profile" />
      <div className="text-xs mx-3">
        <span className="text-sm">Hi, John</span>
        <br />
        <span>john@example.com</span>
        <br />
        <span>Admin</span>
      </div>
    </div>
  );
}
