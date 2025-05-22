import React, { useEffect, useRef } from "react";
import BurgerIcon from "@/components/icons/burger.svg";
import Link from "next/link";

type Menu = {
  name: string;
  href: string;
};

type NavbarMobileProps = {
  menus: Menu[];
  onClick: (menu: Menu) => void;
};



export default function NavbarMobile({ menus, onClick }: NavbarMobileProps) {
  const [show, setShow] = React.useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShow(false); // Callback when click is outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <div className="flex sm:hidden w-full min-h-6 items-center justify-center">
      <div className="absolute left-0  flex items-center sm:hidden">
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 cursor-pointer"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          <BurgerIcon className="w-8 h-8 text-white" />
        </button>
        {show && (
          <div
            className="sm:hidden absolute top-10 bg-dark shadow-2xl min-w-2xs"
            id="mobile-menu"
            ref={wrapperRef}
          >
            <div className="space-y-1 px-2 pt-2 pb-3 w-full">
              {menus.map((menu, index) => (
                <Link
                  key={index}
                  scroll={false}
                  href={menu.href}
                  onClick={() => {
                    onClick(menu);
                    toggleMenu();
                  }}
                  className="block rounded-md  px-3 py-2 text-base font-medium text-white  hover:bg-gray-700 "
                  aria-current="page"
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="">
        <div className="font-bold text-2xl">JS.</div>
      </div>
    </div>
  );
}
