'use client';
import { Logo, MenuFunction } from "@/components/header";
import ResponsiveMenu from "@/components/header/responsive-menu";
import { Icons } from "@/components/shared";
import { useEffect, useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center py-1 md:px-40 md:py-10 bg-[#181921]">
            {/* Logo Section */}
            <div className="flex text-white items-center space-x-2 md:mr-28">
                <Logo />
            </div>

            {/* Menu Function Section */}
            <MenuFunction />

            {/* Hidden Menu on Desktop */}
            <div className="md:block ml-auto items-center space-x-3 hidden"></div>

            {/* Responsive Menu Toggle */}
            <Icons.Menu
                className="block ml-auto mr-1 w-8 h-8 md:hidden"
                onClick={toggleMenu}
            />
            {/* Show Responsive Menu when Menu is Open */}
            {isMenuOpen && <ResponsiveMenu setMenuResponsive={setIsMenuOpen} />}
        </header>
    );
}
