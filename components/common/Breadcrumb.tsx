import React from "react";

export default function Breadcrumb({ data }: any) {
  return (
    <div className="flex items-center">
      {data?.map((item: any) => (
        <>
          <button
            className={`text-[15px] font-medium ${
              item?.current ? "opacity-50" : ""
            }`}
          >
            {item?.name}
          </button>
          {!item?.current && (
            <img
              src="/icons/rightArrow.svg"
              alt="leftArrow"
              className="w-[6px] mx-2 mt-[1.px] opacity-50"
            />
          )}
        </>
      ))}
    </div>
  );
}
