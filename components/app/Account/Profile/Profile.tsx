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

import {
	updateProfileData,
	fetchProfileData,
	updateProfilePhoto,
} from "../../../../redux/reducers/account/profileReducer";
import { successToast } from "../../../../lib/global-functions";
import InfoLabel from "./InfoLabel";
import PasswordSetting from "./PasswordSetting";
import Avatar from "./Avatar";
import AccountType from "./AccountType";

import "react-toastify/dist/ReactToastify.css";

const Profile: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
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
	const [profileEditable, setProfileEditable] = useState(false);
	const handleEditableClick = (_: React.MouseEvent<HTMLElement>) => {
		setProfileEditable(true);
	};
	const profileData: IUser = useSelector(
		(state: any) => state.profile.data
	);

	return (
		<>
			{/* User info card */}
			<div className="text-white bg-red shadow rounded-2xl md:h-72 mt-5">
				{!profileData && (
					<div className="flex items-center justify-center w-full h-full">
						<RotateSpinner size={40} color="white" loading={true} />
					</div>
				)}
				{profileData && (
					<form
						onSubmit={handleUpdateProfileData}
						className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center px-2 md:py-8 py-2 relative"
					>
						{/* Avatar */}
						<div className="md:row-span-2">
							<Avatar
								imageUrl={profileData?.photo}
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
								register={register("name", {
									required: {
										value: true,
										message: "The full name is required.",
									},
								})}
								errorMessage={errors.name?.message}
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
								register={register("phone", {
									required: {
										value: true,
										message: "The phone number is required.",
									},
								})}
								errorMessage={errors.phone?.message}
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
								register={register("address", {
									required: {
										value: true,
										message: "The address is required.",
									},
								})}
								errorMessage={errors.address?.message}
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
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
				<PasswordSetting />
				<AccountType />
			</div>
		</>
	);
};

export default Profile;
