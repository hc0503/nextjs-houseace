import React from "react";
import { FiUser, FiEdit } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegSave } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { RotateSpinner } from "react-spinners-kit";
import { ToastContainer } from "react-toastify";

import { fetchRoleList } from "@/redux/slices/roleSlice";
import {
	updateProfileData,
	fetchProfileData,
	updateProfilePhoto,
} from "@/redux/slices/account/profileSlice";
import { successToast } from "@/lib/global-functions";
import InfoLabel from "./InfoLabel";
import PasswordSetting from "./PasswordSetting";
import Avatar from "./Avatar";
import ArrowCircleButton from "@/components/auth/ArrowCircleButton";
import { Role, User } from ".prisma/client";

import "react-toastify/dist/ReactToastify.css";

const Profile: React.FC = (): JSX.Element => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const handleUpdateProfileData = handleSubmit((data: IProfile) => {
		dispatch(updateProfileData(data));
		setProfileEditable(false);
		successToast("update successfully.");
	});
	const handleUpdatePhoto = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const body = new FormData();
		body.append("file", e.target.files[0]);
		dispatch(updateProfilePhoto(body));
		successToast("update successfully.");
	};
	let roleOptions: React.ReactNode = <option disabled></option>;
	const [profileEditable, setProfileEditable] = useState(false);
	const handleEditableClick = (_: React.MouseEvent<HTMLElement>) => {
		setProfileEditable(true);
	};
	const roles: Role[] = useSelector((state: any) => state.role.data);
	const profileData: User = useSelector(
		(state: any) => state.profile.data
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchRoleList());
		dispatch(fetchProfileData());
	}, []);
	if (roles.length !== 0) {
		roleOptions = roles.map((role: Role, key: number) => (
			<option key={`RoleOption-${key}`} value={role.name}>
				{role.name}
			</option>
		));
	}

	return (
		<>
			<ToastContainer />
			{/* User info card */}
			{!profileData && (
				<div className="flex items-center justify-center mt-4">
					<RotateSpinner size={50} color="#F96868" loading={true} />
				</div>
			)}
			{profileData && (
				<form
					onSubmit={handleUpdateProfileData}
					className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center relative text-white bg-red shadow rounded-2xl md:h-72 mt-5 px-2 md:py-8 py-2"
				>
					{/* Avatar */}
					<div className="md:row-span-2">
						<Avatar
							imageUrl={profileData?.image}
							onChange={handleUpdatePhoto}
						/>
					</div>
					<div className="flex flex-wrap items-center">
						<InfoLabel
							id="name"
							name="name"
							label="Full Name"
							defaultValue={profileData?.name}
							icon={<FiUser className="h-4 w-4" />}
							valueClass={classNames("bg-red rounded", {
								"border border-white": profileEditable,
							})}
							disabled={!profileEditable}
							register={register("name", { required: true })}
							errorMessage={
								errors.name?.type === "required"
									? "The full name is required"
									: ""
							}
						/>
					</div>
					<div className="flex items-center">
						<InfoLabel
							id="phone"
							name="phone"
							label="Phone Number"
							defaultValue={profileData?.phone}
							icon={<BiPhoneCall className="h-4 w-4" />}
							valueClass={classNames("bg-red rounded", {
								"border border-white": profileEditable,
							})}
							disabled={!profileEditable}
							register={register("phone", { required: true })}
							errorMessage={
								errors.phone?.type === "required"
									? "The phone number is required"
									: ""
							}
						/>
					</div>
					<div className="md:col-span-2 flex items-center">
						<InfoLabel
							id="address"
							name="address"
							label="Address"
							defaultValue={profileData?.address}
							icon={<GoLocation className="h-4 w-4" />}
							valueClass={classNames("bg-red rounded", {
								"border border-white": profileEditable,
							})}
							disabled={!profileEditable}
							register={register("address", { required: true })}
							errorMessage={
								errors.address?.type === "required"
									? "The address is required"
									: ""
							}
						/>
					</div>
					<div className="absolute right-4 top-4">
						<button
							type="button"
							onClick={handleEditableClick}
							className={classNames(
								"focus:outline-none hover:text-red-lesslight text-white",
								{ hidden: profileEditable }
							)}
						>
							<FiEdit className="w-7 h-7" />
						</button>
						<button
							className={classNames(
								"focus:outline-none hover:text-red-lesslight text-white",
								{ hidden: !profileEditable }
							)}
						>
							<FaRegSave className="w-7 h-7" />
						</button>
					</div>
				</form>
			)}
			<div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
				{/* Password Settings card */}
				<div className="focus:outline-none bg-white shadow rounded-2xl xl:pl-10 pl-5 pt-11 pb-9 md:pr-1 pr-5">
					<PasswordSetting />
				</div>

				{/* Account Type */}
				<div className="focus:outline-none bg-white shadow rounded-2xl xl:pl-10 pl-5 pt-11 pb-9 pr-1">
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
									<p className="xl:text-lg text-base font-montserrat-semibold">
										Normal Account
									</p>
									<p className="text-xs">
										Creation date: {profileData?.createdAt}
									</p>
								</div>
							</div>
							<div className="mt-5">
								<select
									id="location"
									name="location"
									className="block w-full pl-3 pr-10 py-2 xl:text-base text-sm border border-gray-lesslight focus:outline-none rounded-md"
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
