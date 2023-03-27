"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Music", href: "/#music" },
  { name: "Events", href: "/#events" },
  { name: "Contact", href: "mailto:info@drownthesun.com" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 z-20 top-0 h-16 flex items-center justify-end lg:justify-start ">
      <nav
        className=" max-w-7xl items-center lg:mx-auto flex justify-end p-6 lg:px-8"
        aria-label="Global"
      >
        {!mobileMenuOpen ? (
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-carbon-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        ) : null}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-carbon-500 hover:text-white duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-black backdrop-blur bg-opacity-50  px-6 py-6 sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between flex-row-reverse w-full">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-carbon-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-carbon-500/25">
              <div className="space-y-2 py-6 text-right">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
