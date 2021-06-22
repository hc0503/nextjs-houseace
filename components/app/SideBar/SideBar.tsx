import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
	CalendarIcon,
	HomeIcon,
	UsersIcon,
	XIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Logo from "../../commons/Logo";
import DropNav from "../../app/SideBar/DropNav";

interface IProps {
	sidebarOpen: boolean;
	setSidebarOpen: (sidebarOpen: boolean) => void;
}
interface INavigations extends INavigation {
	sub: INavigation[];
}
const navigations: INavigations[] = [
	{
		name: "Projects",
		href: "#",
		icon: HomeIcon,
		sub: [
			{
				name: "Project1",
				href: "/app/project1",
				icon: "",
			},
			{
				name: "Project2",
				href: "#",
				icon: "",
			},
		],
	},
	{
		name: "Options",
		href: "#",
		icon: UsersIcon,
		sub: [],
	},
	{
		name: "Payments",
		href: "#",
		icon: CalendarIcon,
		sub: [],
	},
];

const SideBar: React.FC<IProps> = ({
	sidebarOpen,
	setSidebarOpen,
}): JSX.Element => {
	const router = useRouter();
	const token = useSelector(
		(state: any) => state?.auth?.data?.tokens?.accessToken?.token
	);
	useEffect(() => {
		if (!token) {
			router.push("/auth/login");
		}
	}, [token]);

	return (
		<>
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as="div"
					static
					className="fixed inset-0 flex z-40 md:hidden"
					open={sidebarOpen}
					onClose={setSidebarOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
							<Transition.Child
								as={Fragment}
								enter="ease-in-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in-out duration-300"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="absolute top-0 right-0 -mr-12 pt-2">
									<button
										className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
										onClick={() => setSidebarOpen(false)}
									>
										<span className="sr-only">Close sidebar</span>
										<XIcon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</button>
								</div>
							</Transition.Child>
							<Link href="/">
								<a className="flex-shrink-0 flex items-center justify-center">
									<Logo src="/logo.png" alt="Houseace" />
								</a>
							</Link>
							<div className="mt-5 flex-1 h-0 overflow-y-auto text-gray-light">
								<nav className="px-2 space-y-1">
									{navigations.map(
										(item: INavigations, key: number) => (
											<DropNav
												key={`NavigationMobile-${key}`}
												item={item}
											/>
										)
									)}
								</nav>
							</div>
						</div>
					</Transition.Child>
					<div className="flex-shrink-0 w-14" aria-hidden="true">
						{/* Dummy element to force sidebar to shrink to fit close icon */}
					</div>
				</Dialog>
			</Transition.Root>

			{/* Static sidebar for desktop */}
			<div className="hidden md:flex md:flex-shrink-0 my-4 ml-4">
				<div className="flex flex-col w-64">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto shadow rounded-2xl">
						<Link href="/">
							<a className="flex items-center flex-shrink-0 mt-4 justify-center">
								<Logo
									src="/logo.png"
									alt="Houseace"
									className="h-14 w-auto"
								/>
							</a>
						</Link>
						<nav
							className={classNames(
								`mt-28 py-3 pr-3
								space-y-1
								text-gray-light text-left text-sm`
							)}
						>
							{navigations.map((item: INavigations, key: number) => (
								<DropNav key={`Navigation-${key}`} item={item} />
							))}
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideBar;
