import { FiUser, FiEdit, FiLock } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRoleList, IRoleState } from "@/redux/slices/roleSlice";
import InfoLabel from "./InfoLabel";
import OutlineInput from "./OutlineInput";
import ArrowCircleButton from "@/components/auth/ArrowCircleButton";

interface IUser {
	fullName: string;
	address: string;
	phoneNumber: string;
	type: number;
	createdAt: string;
	imageUrl: string;
}
const user: IUser = {
	fullName: "Madeline T Heagney",
	address: "98 Garden Place, FENTONS CREEK, Victoria-3518",
	phoneNumber: "(03) 5348 5891",
	type: 1,
	createdAt: "24/03/2020",
	imageUrl: "/images/app/profile.png",
};

const Profile: React.FC = (): JSX.Element => {
	let roleOptions: React.ReactNode = <option disabled></option>;
	const roles: IRole[] = useSelector((state: any) => state.role.data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchRoleList());
	}, []);
	if (roles.length !== 0) {
		roleOptions = roles.map((role: IRole, key: number) => (
			<option key={`RoleOption-${key}`} value={role.name}>
				{role.name}
			</option>
		));
	}
	return (
		<>
			{/* User info card */}
			<div className="flex focus:outline-none bg-red shadow rounded-2xl mt-5 px-2 md:py-8 py-2">
				<div className="grid md:grid-cols-3 grid-cols-1 items-center relative">
					{/* Avatar */}
					<div className="flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
						<div className="mt-1 lg:hidden">
							<div className="flex items-center">
								<div
									className="flex-shrink-0 inline-block rounded-full overflow-hidden h-16 w-16"
									aria-hidden="true"
								>
									<img
										className="rounded-full h-full w-full"
										src={user.imageUrl}
										alt=""
									/>
								</div>
								<div className="ml-5 rounded-md shadow-sm">
									<div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500">
										<label
											htmlFor="user_photo"
											className="relative text-sm leading-4 font-medium text-gray-700"
										>
											<span>Change</span>
											<span className="sr-only"> user photo</span>
										</label>
										<input
											id="user_photo"
											name="user_photo"
											type="file"
											className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-center">
							<div className="hidden relative rounded-full overflow-hidden lg:block w-52 h-52">
								<img
									className="relative rounded-full"
									src={user.imageUrl}
									alt=""
								/>
								<label
									htmlFor="user-photo"
									className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm text-white opacity-0 hover:opacity-100"
								>
									<span>
										<AiOutlineCamera className="h-9 w-9" />
									</span>
									<span className="sr-only"> user photo</span>
									<input
										type="file"
										id="user-photo"
										name="user-photo"
										className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
									/>
								</label>
							</div>
						</div>
					</div>

					<div className="h-full md:flex items-stretch flex-wrap md:mt-0 mt-10">
						<div>
							<InfoLabel
								label="Full Name"
								value={user.fullName}
								icon={<FiUser className="h-4 w-4" />}
							/>
						</div>
						<div className="flex items-center md:mt-0 mt-4">
							<InfoLabel
								label="Address"
								value={user.address}
								icon={<GoLocation className="h-4 w-4" />}
							/>
						</div>
					</div>

					<div className="h-full">
						<InfoLabel
							label="Phone Number"
							value={user.phoneNumber}
							icon={<BiPhoneCall className="h-4 w-4" />}
						/>
					</div>
					<div className="absolute right-0 md:-top-6 top-0">
						<button className="focus:outline-none hover:text-red-lesslight text-white">
							<FiEdit className="w-7 h-7" />
						</button>
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-2 grid-cols-1 mt-6">
				{/* Password Settings card */}
				<div className="focus:outline-none bg-white shadow rounded-2xl xl:pl-10 pl-5 pt-11 pb-9 pr-1">
					<div>
						<p className="font-montserrat-bold xl:text-2xl text-base text-gray-dark">
							Password Setting
						</p>
					</div>
					<div className="">
						<div className="flex space-x-2 xl:text-base text-xs">
							<form className="w-2/3 mt-4">
								<div className="">
									<label htmlFor="current_password" className="block">
										Current Password:
									</label>
									<div className="mt-5">
										<OutlineInput
											id="current_password"
											name="current_password"
											placeHolder="Enter your current password"
											type="password"
										>
											<FiLock
												className="h-5 w-5"
												aria-hidden="true"
											/>
										</OutlineInput>
									</div>
								</div>
								<div className="mt-4">
									<label htmlFor="new_password" className="block">
										Change your password:
									</label>
									<div className="mt-5">
										<OutlineInput
											id="new_password"
											name="new_password"
											placeHolder="New Password"
											type="password"
										>
											<FiLock
												className="h-5 w-5"
												aria-hidden="true"
											/>
										</OutlineInput>
									</div>
									<div className="mt-5">
										<OutlineInput
											id="confirm_password"
											name="confirm_password"
											placeHolder="Confirm New Password"
											type="password"
										>
											<FiLock
												className="h-5 w-5"
												aria-hidden="true"
											/>
										</OutlineInput>
									</div>
								</div>
								<div className="w-full text-right mt-5">
									<ArrowCircleButton
										fontsize="text-xs"
										buttonSize="w-9 h-9 hover:w-24"
									>
										Save
									</ArrowCircleButton>
								</div>
							</form>
							<div className="w-1/3 flex items-center">
								<div className="bg-red-140 rounded-2xl text-2sm xl:p-6 p-2">
									<p>YOUR PASSWORD MUST CONTAIN</p>
									<p className="mt-5">
										<span className="text-gray-light">o</span>{" "}
										Between8-20 characters
									</p>
									<p className="mt-4">
										<span className="text-gray-light">o</span> At
										least 1 UPPER case letter
									</p>
									<p className="mt-4">
										<span className="text-gray-light">o</span> At
										least 1 Special character
									</p>
									<p className="mt-4">
										<span className="text-gray-light">o</span> At
										least 1 Number
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Account Type */}
				<div className="focus:outline-none bg-white shadow rounded-2xl xl:pl-10 pl-5 pt-11 pb-9 pr-1 md:ml-4 md:mt-0 mt-4">
					<div>
						<p className="font-montserrat-bold xl:text-2xl text-base text-gray-dark">
							Account Type
						</p>
					</div>

					<div className="flex flex-wrap justify-center items-stretch h-full">
						<div className="mt-10">
							<div className="flex items-center space-x-3">
								<div className="flex-shrink-0">
									<img
										className="xl:h-20 h-16 xl:w-20 w-16 rounded-full"
										src="/images/app/normal_avatar.png"
										alt=""
									/>
								</div>
								<div className="flex-1 min-w-0">
									<p className="xl:text-lg font-montserrat-semibold">
										Normal Account
									</p>
									<p className="text-xs">
										Creation date: {user.createdAt}
									</p>
								</div>
							</div>
							<div className="mt-5">
								<select
									id="location"
									name="location"
									className="block w-full pl-3 pr-10 py-2 xl:text-base border text-sm border-gray-lesslight focus:outline-none rounded-md"
								>
									{roleOptions}
								</select>
							</div>
							<div className="w-full text-right mt-7">
								<ArrowCircleButton
									fontsize="text-xs"
									buttonSize="w-9 h-9 hover:w-24"
								>
									Save
								</ArrowCircleButton>
							</div>
						</div>

						<div className="">
							<h3 className="text-sm">Normal Account</h3>
							<p className="text-2sm text-gray-310 montserrat-italic">
								Lorem ipsum dolor sit amet, consectetuer adipiscing
								elit. Aenean commodo ligula eget dolor. Aenean massa.
								Cum sociis natoque penatibus et magnis dis parturient
								montes, nascetur ridiculus mus.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
