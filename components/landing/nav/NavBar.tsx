import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import axios from "axios";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import classNames from "classnames";

import Logo from "@/components/commons/Logo";
import Avatar from "@/components/commons/Avatar";
import AvatarDropdown from "./AvatarDropdown";

const Navbar: React.FC = (): JSX.Element => {
	const session = false;
	const dropNavs = [
		{ name: "Log In", href: "/auth/login" },
		{ name: "Registration", href: "/auth/register" },
		{ name: "Renovation Calculator", href: "#" },
		{ name: "Blog", href: "#" },
	];

	return (
		<Disclosure
			as="nav"
			className="bg-white sm:bg-transparent backdrop-filter backdrop-blur-lg"
		>
			{({ open }) => (
				<>
					<div className="container mx-auto flex py-3 sm:py-6">
						<div className="flex w-full justify-between">
							<div className="flex-shrink-0 flex items-center">
								<Link href="/">
									<a>
										<Logo
											src="logo.png"
											alt="Houseace"
											className="block lg:hidden ml-3"
										/>
									</a>
								</Link>
								<Link href="/">
									<a>
										<Logo
											src="logo.png"
											alt="Houseace"
											className="hidden lg:block"
										/>
									</a>
								</Link>
							</div>
							{!session && (
								<div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
									{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
									<a
										href="#"
										className="text-black text-sm sm:text-base font-medium inline-flex items-center"
									>
										How it works
									</a>
									<a
										href="#"
										className="text-black text-sm sm:text-base font-medium inline-flex items-center"
									>
										Gallery
									</a>
									<button
										type="button"
										className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full text-white bg-red-light hover:bg-red focus:outline-none"
									>
										Instant Quote
									</button>
									<AvatarDropdown
										className="bg-gray-300"
										navigations={dropNavs}
									/>
								</div>
							)}
						</div>
						<div className="mr-2 flex items-center sm:hidden">
							{/* Mobile menu button */}
							<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-500">
								<span className="sr-only">Open main menu</span>
								{open ? (
									<XIcon
										className="block h-6 w-6"
										aria-hidden="true"
									/>
								) : (
									<MenuIcon
										className="block h-6 w-6"
										aria-hidden="true"
									/>
								)}
							</Disclosure.Button>
						</div>
					</div>
					{/* Mobile */}
					<Disclosure.Panel className="sm:hidden">
						{!session && (
							<div className="pt-2 pb-3 space-y-1">
								<a
									href="#"
									className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
								>
									Start a Project
								</a>
								<Link href="/auth/login">
									<a className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
										Login/Register
									</a>
								</Link>
							</div>
						)}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
