import Image from "next/image";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import LeftSidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[1fr,2fr,1fr] gap-2 max-w-7xl mx-auto mt-2">
        <LeftSidebar />
        <div className="border border-gray-200 rounded-md h-[87vh] shadow-md overflow-scroll">
          <Posts />
        </div>
        <div className="border border-gray-200 rounded-md shadow-md p-2">
          <div className="rounded-md shadow-md">
            <div className="h-[150px] w-full">
              <Image src="/download.jpeg" height={150} width={300} alt="" />
            </div>
            <div className="mt-6 px-3 pb-2">
              <h1 className="font-semibold text-gray-900 text-xl">
                Learn About Prisma
              </h1>
              <p className="text-blue-400 font-semibold">watch on youtube</p>
            </div>
          </div>
          <div className="rounded-md shadow-md mt-6">
            <div className="h-[150px] w-full">
              <Image src="/download.jpeg" height={150} width={300} alt="" />
            </div>
            <div className="mt-6 px-3 pb-2">
              <h1 className="font-semibold text-gray-900 text-xl">
                Learn About Prisma
              </h1>
              <p className="text-blue-400 font-semibold">watch on youtube</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
