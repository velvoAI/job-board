import Image from "next/image";
import { Button } from "./ui/button";

export default function Appbar() {
  return (
    <div className=" flex items-center justify-between  p-6">
      <div>
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
      </div>
      <div>
        <Button children={"signin"} />
      </div>
    </div>
  );
}
