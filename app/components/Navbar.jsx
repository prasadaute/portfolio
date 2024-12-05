"use client";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#0bbfae] hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <div className="mx-4">
                <div className="sm:flex sm:flex-row hidden items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-xs text-[#929292] mr-2"
                  ></FontAwesomeIcon>
                  <h3 className="text-sm font-medium text-[#0bbfae] flex">
                    <span>prasadaute5171@gmail.com</span>
                  </h3>
                  <h3 className="mx-2">|</h3>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-xs text-[#929292] mr-2"
                  ></FontAwesomeIcon>
                  <h3 className="text-sm font-medium text-[#0bbfae] flex">
                    <span>+91 7057041294</span>
                  </h3>
                </div>
                {/* <p className="text-xs text-gray-500">
                  <a href="#">Software Developer</a>
              </p> */}
              </div>
            </div>
          </div>
          <div className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            {/* <div className="flex flex-shrink-0 items-center">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </div> */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <Link
                href="/"
                className={`inline-flex items-center border-b-2 ${pathname == "/"
                  ? "border-[#f57e18] text-[#0bbfae] font-semibold"
                  : "border-transparent"
                  } px-1 pt-1 text-sm font-medium hover:border-gray-300`}
              >
                Home
              </Link>
              <Link
                href="about"
                className={`inline-flex items-center border-b-2 ${pathname == "/about"
                  ? "border-[#f57e18] text-[#0bbfae] font-semibold"
                  : "border-transparent"
                  } px-1 pt-1 text-sm font-medium hover:border-gray-300`}
              >
                About
              </Link>
              <Link
                href="resume"
                className={`inline-flex items-center border-b-2 ${pathname == "/resume"
                  ? "border-[#f57e18] text-[#0bbfae] font-semibold"
                  : "border-transparent"
                  } px-1 pt-1 text-sm font-medium hover:border-gray-300`}
              >
                Resume
              </Link>
              <Link
                href="services"
                className={`inline-flex items-center border-b-2 ${pathname == "/services"
                  ? "border-[#f57e18] text-[#0bbfae] font-semibold"
                  : "border-transparent"
                  } px-1 pt-1 text-sm font-medium hover:border-gray-300`}
              >
                Services
              </Link>
              {/* <Link
                href="#"
                className={`inline-flex items-center border-b-2 ${
                  pathname == "/portfolio"
                    ? "border-[#f57e18] text-[#0bbfae] font-semibold"
                    : "border-transparent"
                } px-1 pt-1 text-sm font-medium hover:border-gray-300`}
              >
                Portfolio
              </Link> */}
              {/* <Link
                href="#"
                className={`inline-flex items-center border-b-2 ${
                  pathname == "/contact"
                    ? "border-[#f57e18] text-[#0bbfae] font-semibold"
                    : "border-transparent"
                } px-1 pt-1 text-sm font-medium hover:border-gray-300`}
              >
                Contact
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-4 pt-2">
          <div className="m-4">
            <div className="items-center">
              <div className="flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-xs text-[#929292] mr-2"
                ></FontAwesomeIcon>
                <h3 className="text-sm font-medium text-[#0bbfae] flex">
                  <span>prasadaute5171@gmail.com</span>
                </h3>
              </div>
              <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-xs text-[#929292] mr-2"
                ></FontAwesomeIcon>
                <h3 className="text-sm font-medium text-[#0bbfae] flex">
                  <span>+91 7057041294</span>
                </h3>
              </div>
            </div>
            {/* <p className="text-xs text-gray-500">
                  <a href="#">Software Developer</a>
              </p> */}
          </div>
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <DisclosureButton
            as="a"
            href="/"
            className={`block border-l-4 ${pathname == "/" ? 'border-indigo-500 bg-indigo-50' : 'border-transparent'} py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}
          >
            Home
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/about"
            className={`block border-l-4 ${pathname == "/about" ? 'border-indigo-500 bg-indigo-50' : 'border-transparent'} py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}
          >
            About us
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/resume"
            className={`block border-l-4 ${pathname == "/resume" ? 'border-indigo-500 bg-indigo-50' : 'border-transparent'} py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}
          >
            Resume
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/services"
            className={`block border-l-4 ${pathname == "/services" ? 'border-indigo-500 bg-indigo-50' : 'border-transparent'} py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}
          >
            Services
          </DisclosureButton>
          {/* <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Portfolio
          </DisclosureButton> */}
          {/* <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Contact
          </DisclosureButton> */}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default Navbar;
