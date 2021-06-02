import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";
import classNames from "classnames";
import { Menu, Transition } from "@headlessui/react";

import axios from "@/lib/axios";

interface IProps {
	className?: string;
	navigations: INavigation[];
}
interface INavigation {
	name: string;
	href: string;
}

const AvatarDropdown: React.FC<IProps> = ({
	className,
	navigations,
}): JSX.Element => {
	const router = useRouter();
	const handleLogout = async (): Promise<void> => {
		const res = await axios.get("/api/auth/logout");
		if (res.status === 200) {
			router.push("/");
		}
	};
	return (
		<>
			<Menu as="div" className="ml-3">
				{({ open }) => (
					<>
						<div>
							<Menu.Button
								className={classNames(
									"bg-white flex items-center text-sm rounded-full focus:outline-none",
									className
								)}
							>
								<span className="sr-only">Open user menu</span>
								<div className="flex items-center py-2 px-2 space-x-4">
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
							enter="transition ease-out duration-100"
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
								{navigations.map((item: INavigation, key: number) => (
									<Menu.Item key={`MenuItem-${key}`}>
										<Link href={item.href}>
											<a
												className={classNames(
													"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												)}
											>
												{item.name}
											</a>
										</Link>
									</Menu.Item>
								))}
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												{ "bg-gray-100": active },
												"block px-4 py-2 text-sm text-gray-700"
											)}
											onClick={handleLogout}
										>
											Logout
										</a>
									)}
								</Menu.Item>
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		</>
	);
};

export default AvatarDropdown;
