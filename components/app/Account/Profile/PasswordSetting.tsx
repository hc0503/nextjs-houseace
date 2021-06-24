import React, { useRef } from "react";
import { FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";

import OutlineInput from "./OutlineInput";
import ArrowCircleButton from "../../../auth/ArrowCircleButton";
import { successToast } from "../../../../lib/global-functions";
import { postUpdateProfilePassword } from "../../../../services/profileService";

const PasswordSetting: React.FC = (): JSX.Element => {
	const {
		register,
		setError,
		formState: { errors },
		handleSubmit,
		watch,
	} = useForm();
	const password = useRef({});
	password.current = watch("password", "");
	const handleUpdatePassword = handleSubmit(
		async (data: IPassword) => {
			try {
				const res = await postUpdateProfilePassword(data);
				successToast("update successfully.");
			} catch (e) {
				const errors = Object.keys(e.response.data.error.errors);
				errors.map((error) => {
					setError(error, {
						type: "manual",
						message: e.response.data.error.errors[error][0],
					});
				});
			}
		}
	);

	return (
		<div className="focus:outline-none bg-white shadow rounded-2xl xl:pl-10 pl-5 pt-11 pb-9 md:pr-1 pr-5">
			<div>
				<p className="font-montserrat-bold xl:text-2xl text-base text-gray-dark">
					Password Setting
				</p>
			</div>
			<div className="">
				<div className="flex space-x-2">
					<form
						className="mt-4 w-full xl:text-base text-sm"
						onSubmit={handleUpdatePassword}
					>
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
									register={register("current_password", {
										required: {
											value: true,
											message: "The current password is required.",
										},
									})}
									errorMessage={errors.current_password?.message}
								>
									<FiLock className="h-5 w-5" aria-hidden="true" />
								</OutlineInput>
							</div>
						</div>
						<div className="mt-4">
							<label htmlFor="password" className="block">
								Change your password:
							</label>
							<div className="mt-5">
								<OutlineInput
									id="password"
									name="password"
									placeHolder="New Password"
									type="password"
									register={register("password", {
										required: {
											value: true,
											message: "The new password is required",
										},
										minLength: {
											value: 8,
											message:
												"Password must have at least 8 characters.",
										},
									})}
									errorMessage={errors.password?.message}
								>
									<FiLock className="h-5 w-5" aria-hidden="true" />
								</OutlineInput>
							</div>
							<div className="mt-5">
								<OutlineInput
									id="password_confirmation"
									name="password_confirmation"
									placeHolder="Confirm New Password"
									type="password"
									register={register("password_confirmation", {
										validate: (value) =>
											value === password.current ||
											"The password do not match.",
									})}
									errorMessage={errors.password_confirmation?.message}
								>
									<FiLock className="h-5 w-5" aria-hidden="true" />
								</OutlineInput>
							</div>
						</div>
						<div className="w-full text-right mt-5">
							<ArrowCircleButton
								fontsize="text-xs"
								buttonSize="w-9 h-9 hover:w-24"
								type="submit"
							>
								Save
							</ArrowCircleButton>
						</div>
					</form>
					<div className="md:flex hidden items-end mb-14 whitespace-nowrap">
						<div className="bg-red-140 rounded-2xl xl:text-2sm text-2xs xl:p-6 p-2">
							<p>YOUR PASSWORD MUST CONTAIN</p>
							<div className="xl:mt-5 mt-3 xl:space-y-4 xpace-y-3 leading-3">
								<p className="">
									<span className="text-gray-light">o</span>{" "}
									Between8-20 characters
								</p>
								<p className="">
									<span className="text-gray-light">o</span> At least
									1 UPPER case letter
								</p>
								<p className="">
									<span className="text-gray-light">o</span> At least
									1 Special character
								</p>
								<p className="">
									<span className="text-gray-light">o</span> At least
									1 Number
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PasswordSetting;
