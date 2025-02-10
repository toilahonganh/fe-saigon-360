'use client'

import React, { useState, useEffect } from "react";

export default function MenuDropDownFixed({ menuFunc }: MenuDropDown) {
  const [subFunctions, setSubFunctions] = useState(menuFunc.subFunctions);

  useEffect(() => {
    setSubFunctions(menuFunc.subFunctions);
  }, [menuFunc]);

  return (
    <div className="w-full h-52 shadow-lg overflow-y-auto max-h-80 transition-all duration-300 ease-in-out">
      <div className="grid grid-cols-6 gap-4 py-2">
        {subFunctions.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center h-12 hover:underline hover:text-white transition-all duration-300 ease-in-out"
            >
              {/* Hiển thị tên SubFunction */}
              <a
                href={item.url}
                className="block px-3 py-2 text-sm text-white font-light rounded-md transition-all duration-300 ease-in-out text-center"
              >
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
