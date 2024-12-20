"use client"

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Button } from "../ui/button";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { Modal } from "../customUI/Modal";

const navigation = [
  { name: "Home", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  function openModal(){
    setOpen(true)
  }
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="container mx-auto">
        <div className="relative flex h-16 items-center justify-around">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex shrink-0 items-center">
            <Image src="/assets/logo.svg" alt="logo" width={60} height={60} />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-950 hover:bg-[#FF3811] hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium transition duration-300 ease-in-out"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="inset-y-0 right-0 flex gap-5 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <HiOutlineShoppingBag className="text-xl cursor-pointer hover:text-[#FF3811] transition duration-300 ease-in-out" />
            <IoSearchOutline onClick={() => openModal()} className="text-xl cursor-pointer hover:text-[#FF3811] transition duration-300 ease-in-out" />
            <Button
              variant="outline"
              className="
              border-[#FF3811] 
              text-[#FF3811] 
                font-semibold
              hover:text-white 
                hover:bg-gradient-to-r 
              hover:from-[#FF3811] 
              hover:to-[#FF8611] 
                transition 
                duration-300 
                ease-in-out"
            >
              Appointment
            </Button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
  <div className="space-y-1 px-2 pb-3 pt-2 bg-[#FF3811] animation-slideDown">
    {navigation.map((item) => (
      <DisclosureButton
        key={item.name}
        as="a"
        href={item.href}
        aria-current={item.current ? "page" : undefined}
        className={classNames(
          item.current
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "block rounded-md px-3 py-2 text-base font-medium"
        )}
      >
        {item.name}
      </DisclosureButton>
    ))}
  </div>
</DisclosurePanel>

      <Modal open={open} setOpen={setOpen} />
    </Disclosure>
  );
};

export default Navbar;
