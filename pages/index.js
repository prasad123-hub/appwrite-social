import Image from "next/image";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[1fr,2fr,1fr] gap-2 max-w-7xl mx-auto mt-2">
        <LeftSidebar />
        <div className="border border-gray-200 rounded-md h-[87vh] shadow-md overflow-scroll">
          <Posts />
        </div>
        <RightSidebar />
      </div>
    </>
  );
}
