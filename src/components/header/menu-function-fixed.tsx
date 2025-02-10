'use client';
import React, { useState, useEffect } from 'react';
import MenuDropDownFixed from './menu-dropdown-fixed';
import { fetchMenuFunctionData } from '@/server-actions/menu-action';

export default function MenuFunctionFixed() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [menuFunctions, setMenuFunctions] = useState<
    { id: string; name: string; subFunctions: { name: string; url: string }[] }[]
  >([]);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Fetch menu functions
  useEffect(() => {
    const fetchMenuFunctions = async () => {
      try {
        const response = await fetchMenuFunctionData();
        console.log('RES', response);
        setMenuFunctions(response); // Update based on fetched response
      } catch (error) {
        console.error('Failed to fetch menu functions', error);
      }
    };
    fetchMenuFunctions();
  }, []);

  // Hover Menu In
  const handleMouseEnter = (id: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveDropdown(id);
  };

  // Hover Menu Out
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  return (
    <div className="hidden md:flex mr-0 w-full justify-start md:space-x-12 relative">
      {menuFunctions.map((menuFunction) => (
        <div
          key={menuFunction.id}
          onMouseEnter={() => handleMouseEnter(menuFunction.id)}
          onMouseLeave={handleMouseLeave}
          className="relative">
          {/* Menu Item */}
          <div
            className="flex text-white hover:font-bold transition-all duration-200 cursor-pointer"
            aria-expanded={activeDropdown === menuFunction.id ? 'true' : 'false'}
            aria-controls={`dropdown-${menuFunction.id}`}>
            <span className="text-white">{menuFunction.name}</span>
          </div>

          {/* Dropdown */}
          {activeDropdown === menuFunction.id && (
            <div
              id={`dropdown-${menuFunction.id}`}
              onMouseEnter={() => handleMouseEnter(menuFunction.id)}
              onMouseLeave={handleMouseLeave}
              className="fixed left-0 top-[70px]  w-full bg-[#444444] shadow-xl rounded-lg z-50 transition-all duration-300 ease-in-out">
              <MenuDropDownFixed menuFunc={menuFunction} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
