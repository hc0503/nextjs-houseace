import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { BiPhoneCall, BiRectangle } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { IoMdBriefcase } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RotateSpinner } from "react-spinners-kit";

import InfoLabel from "../Profile/InfoLabel";
import SearchInput from "../../TopBar/SearchInput";
import ServiceItem from "./ServiceItem";
import DropdownFileUpload from "./DropdownFileUpload";
import UploadItem from "./UploadItem";
import SocialShareButton from "./SocialShareButton";
import CompanyHero from "./CompanyHero";

interface ICompany {
	businessName: string;
	phoneNumber: string;
	address: string;
	licenseNumber: string;
	yearFounded: string;
	abnNumber: string;
}
const company: ICompany = {
	businessName: "Interlor Archltect",
	phoneNumber: "(03) 5348 5891",
	address: "98 Garden Place, FENTONS CREEK, Victoria-3518",
	licenseNumber: "5348 5891",
	yearFounded: "2012",
	abnNumber: "5348 5891",
};

export const Company: React.FC = (): JSX.Element => {
	const [serviceList, setServiceList] = useState([
		{ name: "Bathroom" },
		{ name: "Kitchen" },
	]);
	const [imageList, setImageList] = useState([
		{ imageUrl: "/images/app/upload_image1.png" },
		{ imageUrl: "/images/app/upload_image2.png" },
	]);
	const profileData: IUser = useSelector(
		(state: any) => state.profile.data
	);
	console.log(profileData?.company?.logoImage);
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
						<div className="bg-white shadow rounded-2xl xl:px-10 px-4 py-11 space-y-10 relative">
							<div className="">
								<InfoLabel
									label="Business Name"
									defaultValue={company.businessName}
									valueClass="font-montserrat-bold text-gray-dark"
									icon={
										<IoMdBriefcase className="h-4 w-4 text-red" />
									}
									id="business_name"
									name="bussiness_name"
								/>
							</div>
							<div className="">
								<InfoLabel
									label="Phone Number"
									defaultValue={company.phoneNumber}
									icon={<BiPhoneCall className="h-4 w-4 text-red" />}
									id="phone"
									name="phone"
								/>
							</div>
							<div className="">
								<InfoLabel
									label="Address"
									defaultValue={company.address}
									icon={<GoLocation className="h-4 w-4 text-red" />}
									id="address"
									name="address"
								/>
							</div>
							<div className="flex justify-between">
								<div className="">
									<InfoLabel
										label="License Number"
										defaultValue={company.licenseNumber}
										icon={
											<BiRectangle className="h-4 w-4 text-red" />
										}
										id="license"
										name="license"
									/>
								</div>
								<div className="">
									<InfoLabel
										label="Year Founded"
										defaultValue={company.yearFounded}
										icon={
											<BiRectangle className="h-4 w-4 text-red" />
										}
										id="year_founded"
										name="year_founded"
									/>
								</div>
								<div className="">
									<InfoLabel
										label="ABN Number"
										defaultValue={company.abnNumber}
										icon={
											<BiRectangle className="h-4 w-4 text-red" />
										}
										id="abn_number"
										name="abn_number"
									/>
								</div>
							</div>
							<div className="absolute md:top-0 -top-0 right-4">
								<button className="focus:outline-none hover:text-red">
									<FiEdit className="w-7 h-7" />
								</button>
							</div>
						</div>
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
							<div className="mt-4 space-x-2">
								{serviceList.map((service: IService, key: number) => (
									<ServiceItem
										key={`ServiceItem-${key}`}
										name={service.name}
									/>
								))}
							</div>
						</div>
						<div className="bg-white shadow rounded-2xl xl:px-10 px-4 py-11">
							<div>
								<p className="xl:text-2xl text-xl font-montserrat-bold text-gray-dark">
									Images
								</p>
							</div>
							<div className="mt-5 w-full">
								<DropdownFileUpload />
							</div>
							<div className="flex mt-10 space-x-2">
								{imageList.map((image: IUploadItem, key: number) => (
									<UploadItem
										imageUrl={image.imageUrl}
										key={`UploadedItem-${key}`}
									/>
								))}
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
