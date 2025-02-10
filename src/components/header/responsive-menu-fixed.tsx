'use client';
import React, { useEffect, useState } from 'react';
import { Icons, TextParagraph } from '@/components/shared';
import axiosClientFe from '@/helpers/call-fe';
import Logo from './logo';

interface ResponsiveMenuProps {
  setMenuResponsive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ResponsiveMenuFixed({
  setMenuResponsive,
}: ResponsiveMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [menuFunctions, setMenuFunctions] = useState<
    {
      id: string;
      name: string;
      subFunctions: { name: string; url: string }[];
    }[]
  >([]);
  const toggleDropdown = (mainMenuFunction: string) => {
    setActiveDropdown(
      activeDropdown === mainMenuFunction ? null : mainMenuFunction
    );
  };

  useEffect(() => {
    const fetchMenuFunctions = async () => {
      try {
        const response = await axiosClientFe.get(`menu-function`);
        setMenuFunctions(response.data);
      } catch (error) {
        console.error('Failed to fetch menu functions', error);
      }
    };
    fetchMenuFunctions();
  }, []);

  return (
    <div className="fixed top-0 left-0 text-white w-full h-full bg-bannerGray z-[1000] flex flex-col">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 mb-4">
        <Logo />
        <Icons.Close
          className="w-8 h-8 cursor-pointer"
          onClick={() => setMenuResponsive(false)}
        />
      </div>

      <div className="p-4 space-y-6">
        {/* Google Login */}
        {/* <LoginButton /> */}
        {/* TextParagraph */}
        <TextParagraph paragraph="Log in to increase the size of the input file. Your activity history will be saved." />
      </div>

      <div className="flex flex-col p-4 space-y-4">
        {/* Menu Items */}
        {menuFunctions.map((menu) => (
          <div key={menu.id} className="border-b pb-2">
            {/* Main Menu Function */}
            <span
              onClick={() => toggleDropdown(menu.name)}
              className="flex items-center text-white font-light text-[18px] cursor-pointer uppercase hover:font-bold">
              {menu.name}
              {activeDropdown === menu.name ? (
                <Icons.ArrowUp className="ml-2" />
              ) : (
                <Icons.ArrowDown className="ml-2" />
              )}
            </span>

            {/* Sub Menu Dropdown */}
            {/* Sub Menu Dropdown */}
            {activeDropdown === menu.name && (
              <div className="flex flex-col mt-10 space-y-10 px-2">
                {menu.subFunctions.map((sub) => (
                  <a
                    key={sub.url}
                    href={sub.url}
                    className="text-sm text-white font-light hover:font-bold transition-all">
                    {sub.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
