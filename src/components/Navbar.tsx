"use client";

import { Fragment } from "react";
import Image from "next/image";
import ProcessCube from "../../public/images/ProcessCube_Logo.svg";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ArrowDownIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { MobileSearch, Search } from "./Search";
import { ToolTipContent } from "@/lib/ToolTipContent";
import Sidebar from "./Sidebar";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const currentPath = usePathname();
  const navbarItems = [
    {
      text: "Tutorial",
      href: "/docs",
      isActive: currentPath.startsWith("/docs/tutorials"),
      hasToolTip: true,
      toolTipContent: [
        { name: "Einführung Entwickler Tutorial", link: "/docs" },
        { name: "Beginners Tutorial", link: "/docs/studio" },
        { name: "Intermediate Tutorial", link: "/docs/engine" },
        { name: "Advanced Tutorial", link: "/docs/authority" },
        { name: "Expert Tutorial", link: "/" },
      ],
    },
    {
      text: "ProcessCube",
      href: "/docs",
      isActive: currentPath.startsWith("/docs"),
      hasToolTip: true,
      toolTipContent: [
        { name: "Einführung ProcessCube", link: "/docs" },
        { name: "Studio", link: "/docs/studio" },
        { name: "Engine", link: "/docs/engine" },
        { name: "Authority", link: "/docs/authority" },
      ],
    },
    {
      text: "Preise",
      href: "https://www.5minds.de/processcube-network-membership/",
      isActive: currentPath === "#",
      hasToolTip: false,
      toolTipContent: [],
    },
    {
      text: "Support",
      href: "#",
      isActive: currentPath === "#",
      hasToolTip: false,
      toolTipContent: [],
    },
    {
      text: "Über uns",
      href: "#",
      isActive: currentPath === "#",
      hasToolTip: true,
      toolTipContent: [
        { name: "5Minds", link: "/" },
        { name: "Datenschutz", link: "/" },
        { name: "Impressum", link: "/" },
      ],
    },
    {
      text: "FAQ",
      href: "/faq",
      isActive: currentPath === "/faq",
      hasToolTip: false,
      toolTipContent: [],
    },
  ];

  function getToolTipContent(navbarItem: {
    text: string;
    href: string;
    isActive: boolean;
    hasToolTip: boolean;
    toolTipContent: ToolTipContent[];
  }) {
    if (navbarItem.hasToolTip)
      return (
        <ul>
          {navbarItem.toolTipContent.map((content) => {
            return (
              <li key={content.link}>
                <Link
                  className="text-sm text-gray-500 hover:text-5minds-orange transition-all duration-100"
                  href={content.link}>
                  {content.name}
                </Link>
              </li>
            );
          })}
        </ul>
      );
  }

  return (
    <Disclosure
      as="nav"
      className="bg-white/80 shadow col-span-6 mb-[2px] fixed z-50 w-full backdrop-filter backdrop-blur-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-4 lg:px-6 max-w-screen-2xl">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image alt="5Minds" src={ProcessCube}></Image>
                    {/* <img src="./images/ProcessCube_Logo.svg"></img> */}
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {navbarItems.map((item) =>
                    item.hasToolTip ? (
                      <Tooltip
                        content={getToolTipContent(item)}
                        size="lg"
                        placement="bottom"
                        shadow="lg"
                        radius="sm"
                        key={item.href}>
                        <Link
                          key={item.text}
                          href={item.href}
                          className={classNames(
                            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                            item.isActive
                              ? "border-5minds-orange text-5minds-orange"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-all"
                          )}>
                          {item.text} <ChevronDownIcon className="h-5 w-5" />
                        </Link>
                      </Tooltip>
                    ) : (
                      <Link
                        key={item.text}
                        href={item.href}
                        className={classNames(
                          "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                          item.isActive
                            ? "border-5minds-orange text-5minds-orange"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-all"
                        )}>
                        {item.text}
                      </Link>
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div>
                      <Search />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                <MobileSearch />
                {/* Mobile menu button */}
                <Disclosure.Button className="ml-2 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-5minds-orange">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <button
                  type="button"
                  className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-5minds-orange focus:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <UserCircleIcon className="h-7 w-7 text-gray-400 hover:text-gray-900" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-5minds-orange text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              {navbarItems.map((item) => {
                return (
                  <Disclosure.Button
                    as="a"
                    href={item.href}
                    key={item.href}
                    className={`block text-base font-medium py-2 pl-3 pr-4 ${
                      item.isActive
                        ? "border-l-4 border-5minds-orange bg-gray-100 text-5minds-orange"
                        : "border-l-4 border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                    }`}>
                    {item.text}
                  </Disclosure.Button>
                );
              })}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="mt-3 space-y-1">
                <Sidebar />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
