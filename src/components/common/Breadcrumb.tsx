import Icons from "@/src/assets";
import { useRouter } from "next/router";
import React from "react";

export default function Breadcrumb({ data }: any) {
  const router = useRouter();
  return (
    <div className="flex items-center inline-block">
      {data?.map((item: any, index: number) => (
        <div key={index} className="flex">
          <button
            className={`text-[15px] font-medium ${
              item?.current ? "opacity-50" : ""
            }`}
            onClick={() => router.push(item?.path)}
          >
            {item?.name}
          </button>
          {!item?.current && (
            <span className="w-[6px] mx-2 mt-[1.px] opacity-50">
              <Icons.rightArrowIcon svgProps={{ width: 6 }} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
