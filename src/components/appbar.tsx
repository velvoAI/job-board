import Image from "next/image";

export default function Appbar() {
  return (
    <div className="flex items-center justify-between px-26 py-8  z-5 backdrop-blur-xs fixed w-screen   ">
      <div className=" cursor-pointer">Velvo Jobs</div>
      <div className=" flex items-center gap-6 cursor-pointer font-medium ">
        <div>Home</div>
        <div>Jobs</div>
        <div>About Us</div>
        <div>Join Community</div>
      </div>
    </div>
  );
}
