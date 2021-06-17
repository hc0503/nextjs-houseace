import { useRouter } from "next/router";
import { Fragment } from "react";
import classNames from "classnames";
import { Menu, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";

import axios from "@/lib/axios";
import { User } from ".prisma/client";

const ProfileDropdown: React.FC = (): JSX.Element => {
	const router = useRouter();
	const profileData: User = useSelector(
		(state: any) => state.profile.data
	);
	const userNavigation = [
		{ name: "Your Profile", href: "#" },
		{ name: "Settings", href: "#" },
	];
	const handleLogout = async (): Promise<void> => {
		const res = await axios.get("/api/auth/logout");
		if (res.status === 200) {
			router.push("/");
		}
	};

	return (
		<>
			<Menu as="div" className="ml-3 relative">
				{({ open }) => (
					<>
						<div>
							<Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<span className="sr-only">Open user menu</span>
								<img
									className="h-8 w-8 rounded-full object-cover"
									src={profileData?.image}
									alt=""
									onError={(e) => {
										e.currentTarget.onerror = null;
										e.currentTarget.src = "/images/default-user.png";
									}}
								/>
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
								{userNavigation.map((item: any, key: number) => (
									<Menu.Item key={`MenuItem-${key}`}>
										{({ active }) => (
											<a
												href={item.href}
												className={classNames(
													{ "bg-gray-100": active },
													"block px-4 py-2 text-sm text-gray-700"
												)}
											>
												{item.name}
											</a>
										)}
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

export default ProfileDropdown;
