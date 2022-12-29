import Image from "next/image";
import React from "react";

const RightSidebar = () => {
  return (
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
  );
};

export default RightSidebar;
