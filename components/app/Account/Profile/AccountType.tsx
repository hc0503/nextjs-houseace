import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RotateSpinner } from "react-spinners-kit";
import { useForm } from "react-hook-form";

import { fetchRoleList } from "../../../../redux/reducers/roleReducer";
import ArrowCircleButton from "../../../auth/ArrowCircleButton";
import { updateProfileType } from "../../../../redux/reducers/account/profileReducer";
import { successToast } from "../../../../lib/global-functions";

const AccountType: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchRoleList());
	}, []);
	const profileData: IUser = useSelector(
		(state: any) => state.profile.data
	);
	const roleList: IRole[] = useSelector(
		(state: any) => state.role.data
	);
	const { register, handleSubmit } = useForm();
	const handleUpdateType = handleSubmit(
		async (data: IProfileType) => {
			dispatch(updateProfileType(data));
			successToast("update successfully.");
		}
	);
	return (
		<div className="focus:outline-none bg-white shadow rounded-2xl xl:pl-10 pl-5 pt-11 pb-9 pr-1">
			{(!profileData || !roleList) && (
				<div className="flex items-center justify-center w-full h-full">
					<RotateSpinner size={40} color="#F96868" loading={true} />
				</div>
			)}
			{profileData && roleList && (
				<div className="h-full">
					<div>
						<p className="font-montserrat-bold xl:text-2xl text-base text-gray-dark">
							Account Type
						</p>
					</div>

					<div className="flex flex-wrap justify-center items-stretch h-full">
						<form onSubmit={handleUpdateType} className="mt-10">
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
									id="role"
									name="role"
									defaultValue={profileData?.roleId}
									className="block w-full pl-3 pr-10 py-2 xl:text-base text-sm border border-gray-lesslight focus:outline-none rounded-md"
									{...register("role", { required: true })}
								>
									{roleList.map((role: IRole, key: number) => (
										<option key={`RoleOption-${key}`} value={role.id}>
											{role.name}
										</option>
									))}
								</select>
							</div>
							<div className="w-full text-right mt-7">
								<ArrowCircleButton
									type="submit"
									fontsize="text-xs"
									buttonSize="w-9 h-9 hover:w-24"
								>
									Save
								</ArrowCircleButton>
							</div>
						</form>

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
			)}
		</div>
	);
};
export default AccountType;
