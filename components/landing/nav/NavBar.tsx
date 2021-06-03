import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { useState } from "react";
import classNames from "classnames";

import RoundButton from "@/components/landing/renovation/RoundButton";
import ArrowCircleButton from "@/components/auth/ArrowCircleButton";

const navigations: INavigation[] = [
	{ name: "Login", href: "/auth/login" },
	{ name: "Registration", href: "/auth/register" },
	{ name: "#", href: "#" },
	{ name: "Renovation Calculator", href: "#" },
	{ name: "Blog", href: "#" },
	{ name: "Contractor Signup", href: "#" },
];

const NavBar: React.FC = (): JSX.Element => {
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
				"bg-white shadow fixed w-full z-50 backdrop-filter backdrop-blur-lg",
				{ "md:bg-transparent": !sticky }
			)}
		>
			{({ open }) => (
				<>
					<div className="mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between py-3">
							<div className="flex">
								<div className="-ml-2 mr-2 flex items-center md:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
								<div className="flex-shrink-0 flex items-center">
									<img
										className="block md:hidden"
										src="/favicon.png"
										alt="Workflow"
										height={41}
										width={41}
									/>
									<img
										className="hidden md:block"
										src="/logo.png"
										alt="Workflow"
										height={41}
										width="auto"
									/>
								</div>
							</div>
							<div className="flex items-center md:space-x-8">
								<div className="hidden md:flex md:space-x-8 lg:text-xl font-montserrat-semibold">
									<div
										className={classNames(
											"flex space-x-2 rounded-full border items-center bg-white pl-3 text-left",
											{ hidden: !sticky }
										)}
									>
										<input
											id="project"
											name="project"
											className={classNames(
												"text-xs rounded-full focus:outline-none border-0 px-1 py-1 font-montserrat"
											)}
											placeholder="Search here"
										/>

										<div className="w-36 text-right">
											<ArrowCircleButton
												fontsize="text-xs"
												arrowSize="h-4 w-4"
												buttonSize="h-12 w-12"
											>
												Search
											</ArrowCircleButton>
										</div>
									</div>
									<a href="#" className="inline-flex items-center">
										How it works
									</a>
									<a href="#" className="inline-flex items-center">
										Gallery
									</a>
								</div>
								<div className="flex-shrink-0">
									<RoundButton
										padding="py-3 px-9"
										borderColor="border-red"
										bgColor={
											sticky
												? "bg-white hover:bg-red"
												: "bg-red hover:bg-red-dark"
										}
										textColor={
											sticky
												? "text-red hover:text-white"
												: "text-white hover:text-white"
										}
									>
										Instant Quote
									</RoundButton>
								</div>
								<div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
									{/* Profile dropdown */}
									<Menu as="div" className="ml-3 relative">
										{({ open }) => (
											<>
												<div>
													<Menu.Button
														className={classNames(
															"bg-custom-1 rounded-full flex text-sm focus:outline-none",
															{ "bg-custom-profile": !sticky }
														)}
													>
														<span className="sr-only">
															Open user menu
														</span>
														<div className="flex items-center py-1 px-2 space-x-4">
															<img
																className="h-4 pl-1"
																src="/images/landing/menu.png"
																alt=""
															/>
															<img
																className="h-10"
																src="/images/landing/avatar.png"
																alt=""
															/>
														</div>
													</Menu.Button>
												</div>
												<Transition
													show={open}
													as={Fragment}
													enter="transition ease-out duration-200"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items
														static
														className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
													>
														{navigations.map(
															(item: INavigation, key: number) => {
																return item.name === "#" ? (
																	<div className="w-full border-t border-gray-less pt-3 mt-3"></div>
																) : (
																	<Menu.Item key={`DropNav-${key}`}>
																		<Link href={item.href}>
																			<a
																				className={classNames(
																					"hover:bg-gray-100 block px-4 py-2 text-sm"
																				)}
																			>
																				{item.name}
																			</a>
																		</Link>
																	</Menu.Item>
																);
															}
														)}
													</Menu.Items>
												</Transition>
											</>
										)}
									</Menu>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden bg-white">
						<div className="pt-2 pb-3 space-y-1">
							{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
							<a
								href="#"
								className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-montserrat-semibold sm:pl-5 sm:pr-6"
							>
								How it works
							</a>
							<a
								href="#"
								className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-montserrat-semibold sm:pl-5 sm:pr-6"
							>
								Gallery
							</a>
						</div>
						<div className="pt-4 pb-3 border-t border-gray-200">
							<div className="flex items-center px-4 sm:px-6">
								<div className="flex-shrink-0">
									<img
										className="h-10 w-10 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</div>
								<div className="ml-3">
									<div className="text-base font-montserrat-medium text-gray-800">
										Tom Cook
									</div>
									<div className="text-sm font-montserrat-medium text-gray-500">
										tom@example.com
									</div>
								</div>
							</div>
							<div className="mt-3 space-y-1">
								{navigations.map((item: INavigation, key: number) => {
									return item.name === "#" ? (
										<div className="w-full border-t border-gray-less" />
									) : (
										<Link
											href={item.href}
											key={`MobileDropNav-${key}`}
										>
											<a className="block px-4 py-2 text-base font-montserrat-medium hover:bg-gray-100 sm:px-6">
												{item.name}
											</a>
										</Link>
									);
								})}
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default NavBar;
