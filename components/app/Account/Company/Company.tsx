import { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BiPhoneCall, BiRectangle } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { IoMdBriefcase } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import Avatar from "@/components/app/Account/Profile/Avatar";
import InfoLabel from "@/components/app/Account/Profile/InfoLabel";
import SearchInput from "@/components/app/TopBar/SearchInput";
import ServiceItem from "./ServiceItem";
import FileUpload from "./FileUpload";
import UploadItem from "./UploadItem";
import SocialShareButton from "./SocialShareButton";

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
	return (
		<>
			<div
				className="mt-5 h-72 rounded-2xl relative"
				style={{
					backgroundImage: "url('/images/app/company_hero.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="flex items-center h-full ml-10">
					<Avatar
						imageUrl="/images/app/company_logo.png"
						size="w-44 h-44"
					/>
				</div>
				<button
					type="button"
					className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white hover:bg-white hover:text-gray focus:outline-none absolute bottom-5 right-5"
				>
					<AiOutlineCamera className="h-7 w-7" aria-hidden="true" />
				</button>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
				<div className="bg-white shadow rounded-2xl xl:px-10 px-4 py-11 space-y-10 relative">
					<div className="">
						<InfoLabel
							label="Business Name"
							value={company.businessName}
							valueClass="font-montserrat-bold text-gray-dark"
							icon={<IoMdBriefcase className="h-4 w-4 text-red" />}
						/>
					</div>
					<div className="">
						<InfoLabel
							label="Phone Number"
							value={company.phoneNumber}
							icon={<BiPhoneCall className="h-4 w-4 text-red" />}
						/>
					</div>
					<div className="">
						<InfoLabel
							label="Address"
							value={company.address}
							icon={<GoLocation className="h-4 w-4 text-red" />}
						/>
					</div>
					<div className="flex justify-between">
						<div className="">
							<InfoLabel
								label="License Number"
								value={company.licenseNumber}
								icon={<BiRectangle className="h-4 w-4 text-red" />}
							/>
						</div>
						<div className="">
							<InfoLabel
								label="Year Founded"
								value={company.yearFounded}
								icon={<BiRectangle className="h-4 w-4 text-red" />}
							/>
						</div>
						<div className="">
							<InfoLabel
								label="ABN Number"
								value={company.abnNumber}
								icon={<BiRectangle className="h-4 w-4 text-red" />}
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
						<FileUpload />
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
						<FileUpload />
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
	);
};

export default Company;
