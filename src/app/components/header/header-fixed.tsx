'use client';
import { Logo, MenuFunctionFixed, ResponsiveMenuFixed } from "@/components/header";
import { Icons } from "@/components/shared";
import { useEffect, useState } from "react";

export default function HeaderFix() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="absolute top-0 left-0 w-full h-20 bg-[#333333] z-10 flex items-center py-1 md:px-5 md:py-2 bg-transparent">
            {/* Logo Section */}
            <div className="flex text-white items-center space-x-2 md:mr-28">
                <Logo />
            </div>

            {/* Menu Function Section */}
            <MenuFunctionFixed />

            {/* Hidden Menu on Desktop */}
            <div className="md:block ml-auto items-center space-x-3 hidden"></div>

            {/* Responsive Menu Toggle */}
            <Icons.Menu
                className="block ml-auto mr-1 w-8 h-8 md:hidden"
                onClick={toggleMenu}
            />
            {/* Show Responsive Menu when Menu is Open */}
            {isMenuOpen && <ResponsiveMenuFixed setMenuResponsive={setIsMenuOpen} />}
        </header>
    );
}
