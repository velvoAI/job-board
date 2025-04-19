import { BackgroundLines } from "./ui/background-lines";

export default function Hero() {
  return (
    <div className=" w-screen h-full ">
      <BackgroundLines className=" flex justify-center items-center h-full z-0">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover, Connect, Grow.
          </h1>
          <p className="text-[1.4vh] px-7 md:text-xl max-w-2xl mx-auto  dark:text-gray-200 text-gray-500">
            Your launchpad to the right opportunities – built for fresh grads,
            code ninjas, and startup dreamers.
          </p>
        </header>
      </BackgroundLines>
    </div>
  );
}
