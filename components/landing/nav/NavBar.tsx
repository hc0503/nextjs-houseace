import Link from "next/link";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import classNames from "classnames";

import Logo from "@/components/commons/Logo";
import AvatarDropdown from "./AvatarDropdown";
import RoundButton from "../renovation/RoundButton";

const session = false;
const dropNavs = [
	{ name: "Log In", href: "/auth/login" },
	{ name: "Registration", href: "/auth/register" },
	{ name: "Renovation Calculator", href: "#" },
	{ name: "Blog", href: "#" },
];

const Navbar: React.FC = (): JSX.Element => {
	const [sticky, setSticky] = useState(false);
	useScrollPosition(({ prevPos, currPos }) => {
		if (currPos.y < -100) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	});
	return (
		<Disclosure
			as="nav"
			className={classNames(
				"bg-white backdrop-filter backdrop-blur-lg fixed w-full z-50 h-24 flex items-center",
				{ "sm:bg-transparent": !sticky }
			)}
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
									<a href="#" className="text-xl font-semibold">
										How it works
									</a>
									<a href="#" className="text-xl font-semibold">
										Gallery
									</a>
									<RoundButton
										padding="py-4 px-9"
										borderColor="border-red"
										bgColor={sticky ? "bg-white" : "bg-red"}
										textColor={sticky ? "text-black" : "text-white"}
										hoverBgColor={
											sticky ? "hover:bg-red" : "hover:bg-red-dark"
										}
										fontWeight="font-semibold"
									>
										Instant Quote
									</RoundButton>
									<AvatarDropdown
										className={classNames("border border-white", {
											"bg-custom-1": !sticky,
										})}
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
