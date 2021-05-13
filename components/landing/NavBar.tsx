import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../redux/slices/authSlice';
import Logo from '../commons/Logo';
import Avatar from '../commons/Avatar';

const Navbar = () => {
	const classNames = (...classes) => {
		return classes.filter(Boolean).join(' ');
	}
	const userData = useSelector((state: any) => state.auth);
	const dispatch = useDispatch();
	const handleLogout = () => {
	  dispatch(logout());
	}

	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex h-16">
						<div className="flex w-full justify-between">
							<div className="flex-shrink-0 flex items-center">
							<Link href="/">
								<a><Logo src="logo.png" alt="Houseace" className="block lg:hidden"/></a>
							</Link>
							<Link href="/">
								<a><Logo src="logo.png" alt="Houseace" className="hidden lg:block"/></a>
							</Link>
							</div>
							{!userData.loggedIn && <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
							<a
								href="#"
								className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							>
								Start a Project
							</a>
							<Link href='/auth/login'>
								<a
									className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
								>
									Login/Register
								</a>
							</Link>
							</div>}
						</div>
						{userData.loggedIn && <div className="hidden sm:ml-6 sm:flex sm:items-center">
							<button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
							<span className="sr-only">View notifications</span>
							<BellIcon className="h-6 w-6" aria-hidden="true" />
							</button>
	
							{/* Profile dropdown */}
							<Menu as="div" className="ml-3 relative">
							{({ open }) => (
								<>
									<div>
									<Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
										<span className="sr-only">Open user menu</span>
										<Avatar
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt="Avatar"
										/>
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
										<Menu.Item>
											{({ active }) => (
											<a
												href="#"
												className={classNames(
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Account
											</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
											<a
												href="#"
												className={classNames(
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Projects
											</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
											<a
												href="#"
												className={classNames(
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Contacts
											</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
											<a
												href="#"
												className={classNames(
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Payments
											</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
											<a
												href="#"
												className={classNames(
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
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
						</div>}
						<div className="-mr-2 flex items-center sm:hidden">
							{/* Mobile menu button */}
							<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-500">
							<span className="sr-only">Open main menu</span>
							{open ? (
								<XIcon className="block h-6 w-6" aria-hidden="true" />
							) : (
								<MenuIcon className="block h-6 w-6" aria-hidden="true" />
							)}
							</Disclosure.Button>
						</div>
					</div>
					</div>
	
					<Disclosure.Panel className="sm:hidden">
					{!userData.loggedIn && <div className="pt-2 pb-3 space-y-1">
						{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
						<a
							href="#"
							className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
						>
							Start a Project
						</a>
						<Link href="/auth/login">
							<a
							className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
							>
							Login/Register
							</a>
						</Link>
					</div>}
					{userData.loggedIn && <div className="pt-4 pb-3 border-t border-gray-200">
						<div className="flex items-center px-4">
							<div className="flex-shrink-0">
								<Avatar
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt="Avatar"
								/>
							</div>
							<div className="ml-3">
							<div className="text-base font-medium text-gray-800">Tom Cook</div>
							<div className="text-sm font-medium text-gray-500">tom@example.com</div>
							</div>
							<button className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
							<span className="sr-only">View notifications</span>
							<BellIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-3 space-y-1">
							<a
							href="#"
							className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
							>
							Account
							</a>
							<a
							href="#"
							className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
							>
							Projects
							</a>
							<a
							href="#"
							className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
							>
							Contacts
							</a>
							<a
							href="#"
							className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
							>
							Payments
							</a>
							<a
							href="#"
							className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
							onClick={handleLogout}
							>
							Logout
							</a>
						</div>
					</div>}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	 );
}

export default Navbar;