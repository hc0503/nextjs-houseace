import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { BiPhoneCall, BiRectangle } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { IoMdBriefcase } from "react-icons/io";
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaRegSave,
} from "react-icons/fa";
import { RotateSpinner } from "react-spinners-kit";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import { successToast } from "../../../../lib/global-functions";
import InfoLabel from "../Profile/InfoLabel";
import SearchInput from "../../TopBar/SearchInput";
import ServiceItem from "./ServiceItem";
import DropdownFileUpload from "./DropdownFileUpload";
import UploadItem from "./UploadItem";
import SocialShareButton from "./SocialShareButton";
import CompanyHero from "./CompanyHero";
import {
	addCompanyImage,
	deleteCompanyImage,
	updateCompanyData,
	updateCompanyServices,
} from "../../../../redux/reducers/account/profileReducer";

export const Company: React.FC = (): JSX.Element => {
	const profileData: IUser = useSelector(
		(state: any) => state.profile.data
	);
	const [companyEditable, setCompanyEditable] = useState(false);
	const dispatch = useDispatch();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const handleCompanyEditable = (
		_: React.MouseEvent<HTMLElement>
	) => {
		setCompanyEditable(true);
	};
	const handleUpdateCompanyData = handleSubmit(
		(data: ICompanyData) => {
			dispatch(updateCompanyData(data));
			setCompanyEditable(false);
			successToast("update successfully.");
		}
	);
	const handleDeleteService = (serviceName: string) => {
		const services = profileData.company.services.filter(
			(service) => service.name !== serviceName
		);
		dispatch(updateCompanyServices({ services: services }));
	};
	const handleAddService = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === "Enter") {
			const value = e.currentTarget.value;
			if (value === "") return;
			const uniqueNames = [];
			const tempList = [
				...profileData.company.services,
				{ name: value },
			];
			tempList.map((service) => {
				if (uniqueNames.indexOf(service.name) === -1) {
					uniqueNames.push(service.name);
				}
			});
			const services = [];
			uniqueNames.map((uniqueName) => {
				services.push({ name: uniqueName });
			});
			e.currentTarget.value = "";
			dispatch(updateCompanyServices({ services: services }));
		}
	};
	const handleAddCompanyImage = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const body = new FormData();
		body.append("file", e.target.files[0]);
		dispatch(addCompanyImage(body));
		successToast("The image is added successfully.");
	};
	const handleDeleteCompanyImage = (id: string) => {
		dispatch(deleteCompanyImage(id));
		successToast("The image is deleted successfully.");
	};
	return (
		<>
			{!profileData && (
				<div className="flex items-center justify-center w-full h-96">
					<RotateSpinner size={40} color="#F96868" loading={true} />
				</div>
			)}
			{profileData && (
				<>
					<CompanyHero
						logoImage={profileData.company.logoImage}
						heroImage={profileData.company.heroImage}
					/>
					<div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
						<form
							onSubmit={handleUpdateCompanyData}
							className="bg-white shadow rounded-2xl xl:px-10 px-4 py-11 space-y-10 relative"
						>
							<div className="">
								<InfoLabel
									label="Business Name"
									defaultValue={profileData.company.businessName}
									valueClass={classNames(
										"font-montserrat-bold text-gray-dark rounded",
										{ "border border-red": companyEditable }
									)}
									icon={
										<IoMdBriefcase className="h-4 w-4 text-red" />
									}
									id="business_name"
									name="bussiness_name"
									disabled={!companyEditable}
									register={register("business_name", {
										required: {
											value: true,
											message: "The business name is required.",
										},
									})}
									errorMessage={errors.business_name?.message}
								/>
							</div>
							<div className="">
								<InfoLabel
									label="Phone Number"
									defaultValue={profileData.company.phoneNumber}
									valueClass={classNames("rounded", {
										"border border-red": companyEditable,
									})}
									icon={<BiPhoneCall className="h-4 w-4 text-red" />}
									id="phone_number"
									name="phone_number"
									disabled={!companyEditable}
									register={register("phone_number", {
										required: {
											value: true,
											message: "The phone number is required.",
										},
									})}
									errorMessage={errors.phone_number?.message}
								/>
							</div>
							<div className="">
								<InfoLabel
									label="Address"
									defaultValue={profileData.company.address}
									valueClass={classNames("rounded", {
										"border border-red": companyEditable,
									})}
									icon={<GoLocation className="h-4 w-4 text-red" />}
									id="address"
									name="address"
									disabled={!companyEditable}
									register={register("address", {
										required: {
											value: true,
											message: "The address is required.",
										},
									})}
									errorMessage={errors.address?.message}
								/>
							</div>
							<div className="flex justify-between space-x-1">
								<div className="">
									<InfoLabel
										label="License Number"
										defaultValue={profileData.company.licenseNumber}
										valueClass={classNames("rounded", {
											"border border-red": companyEditable,
										})}
										icon={
											<BiRectangle className="h-4 w-4 text-red" />
										}
										id="license_number"
										name="license_number"
										disabled={!companyEditable}
										register={register("license_number", {
											required: {
												value: true,
												message: "The license number is required.",
											},
										})}
										errorMessage={errors.license_number?.message}
									/>
								</div>
								<div className="">
									<InfoLabel
										label="Year Founded"
										defaultValue={profileData.company.yearFounded}
										valueClass={classNames("rounded", {
											"border border-red": companyEditable,
										})}
										icon={
											<BiRectangle className="h-4 w-4 text-red" />
										}
										id="year_founded"
										name="year_founded"
										disabled={!companyEditable}
										register={register("year_founded", {
											required: {
												value: true,
												message: "The year founded is required.",
											},
										})}
										errorMessage={errors.year_founded?.message}
									/>
								</div>
								<div className="">
									<InfoLabel
										label="ABN Number"
										defaultValue={profileData.company.abnNumber}
										valueClass={classNames("rounded", {
											"border border-red": companyEditable,
										})}
										icon={
											<BiRectangle className="h-4 w-4 text-red" />
										}
										id="abn_number"
										name="abn_number"
										disabled={!companyEditable}
										register={register("abn_number", {
											required: {
												value: true,
												message: "The ABN number is required.",
											},
										})}
										errorMessage={errors.abn_number?.message}
									/>
								</div>
							</div>
							<div className="absolute md:-top-1 -top-1 right-4">
								<button
									className={classNames(
										"focus:outline-none hover:text-red",
										{ hidden: companyEditable }
									)}
									type="button"
									onClick={handleCompanyEditable}
								>
									<FiEdit className="w-7 h-7" />
								</button>
								<button
									className={classNames(
										"focus:outline-none hover:text-red",
										{ hidden: !companyEditable }
									)}
									type="submit"
								>
									<FaRegSave className="w-7 h-7" />
								</button>
							</div>
						</form>
						<div className="bg-white shadow rounded-2xl xl:px-10 px-4 py-11">
							<div>
								<p className="xl:text-2xl text-xl font-montserrat-bold text-gray-dark">
									Service Provided
								</p>
							</div>
							<div className="mt-5">
								<SearchInput
									id="search_service"
									name="search_service"
									placeHolder="Search here"
									border="border border-gray-less focus:border-red"
									rounded="rounded-full"
									onKeyPress={handleAddService}
								/>
								<p className="text-xs mt-1">
									e.g. Bathroom, designing, interior, kitchen
								</p>
							</div>
							<div className="mt-10">
								<p className="font-montserrat-bold text-gray-dark xl:text-base text-sm">
									Your Service list
								</p>
							</div>
							<div className="mt-4 space-x-2 flex flex-wrap">
								{profileData.company.services.map(
									(service: IService, key: number) => (
										<ServiceItem
											key={`ServiceItem-${key}`}
											name={service.name}
											onDelete={() =>
												handleDeleteService(service.name)
											}
										/>
									)
								)}
							</div>
						</div>
						<div className="bg-white shadow rounded-2xl xl:px-10 px-4 py-11">
							<div>
								<p className="xl:text-2xl text-xl font-montserrat-bold text-gray-dark">
									Images
								</p>
							</div>
							<div className="mt-5 w-full">
								<DropdownFileUpload
									onChange={handleAddCompanyImage}
								/>
							</div>
							<div className="flex flex-wrap mt-10 space-x-2">
								{profileData.company.companyImages.map(
									(companyImage: ICompanyImage, key: number) => (
										<UploadItem
											imageUrl={companyImage.image}
											onDelete={(
												_: React.MouseEvent<HTMLInputElement>
											) => handleDeleteCompanyImage(companyImage.id)}
											key={`UploadedItem-${key}`}
										/>
									)
								)}
							</div>
						</div>
						<div className="bg-white shadow rounded-2xl xl:px-10 px-4 py-11">
							<div>
								<p className="xl:text-2xl text-xl font-montserrat-bold text-gray-dark">
									License
								</p>
							</div>
							<div className="mt-5 w-full">
								<DropdownFileUpload />
							</div>
						</div>
						<div className="bg-white shadow rounded-2xl xl:px-10 px-4 py-8 md:col-span-2 flex md:space-x-14 space-x-5">
							<div>
								<p className="xl:text-2xl text-xl font-montserrat-bold text-gray-dark">
									Social Media:
								</p>
							</div>
							<div className="flex items-center md:space-x-8 space-x-2">
								<SocialShareButton>
									<FaFacebookF className="xl:w-8 w-7 xl:h-8 h-7" />
								</SocialShareButton>
								<SocialShareButton>
									<FaTwitter className="xl:w-8 w-7 xl:h-8 h-7" />
								</SocialShareButton>
								<SocialShareButton>
									<FaLinkedinIn className="xl:w-8 w-7 xl:h-8 h-7" />
								</SocialShareButton>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Company;
