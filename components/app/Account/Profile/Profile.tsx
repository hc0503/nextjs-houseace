import { FiUser, FiEdit } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";

import InfoLabel from "./InfoLabel";

const user = {
	fullName: "Madeline T Heagney",
	address: "98 Garden Place, FENTONS CREEK, Victoria-3518",
	phoneNumber: "(03) 5348 5891",
	type: 1,
	createdAt: "24/03/2020",
	imageUrl: "/images/app/profile.png",
};

const Profile: React.FC = (): JSX.Element => {
	return (
		<>
			{/* User info card */}
			<div className="flex focus:outline-none bg-red shadow rounded-2xl mt-5 md:px-28 px-2 md:py-8 py-2">
				<div className="md:flex items-center md:space-x-20 w-full">
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
											className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
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

						<div className="hidden relative rounded-full overflow-hidden lg:block">
							<img
								className="relative rounded-full w-40 h-40"
								src={user.imageUrl}
								alt=""
							/>
							<label
								htmlFor="user-photo"
								className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
							>
								<span>Change</span>
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

					<div className="w-full h-full md:flex items-stretch flex-wrap md:mt-0 mt-2 relative">
						<div className="md:flex justify-between items-center w-full">
							<div>
								<InfoLabel
									label="Full Name"
									value={user.fullName}
									icon={<FiUser className="h-4 w-4" />}
								/>
							</div>
							<div className="md:mt-0 mt-2">
								<InfoLabel
									label="Phone Number"
									value={user.phoneNumber}
									icon={<BiPhoneCall className="h-4 w-4" />}
								/>
							</div>
						</div>
						<div className="flex items-end md:mt-0 mt-2">
							<InfoLabel
								label="Address"
								value={user.address}
								icon={<GoLocation className="h-4 w-4" />}
							/>
						</div>
						<div className="absolute md:-right-24 md:-top-4 right-0 -top-14">
							<FiEdit className="text-white w-7 h-7" />
						</div>
					</div>
				</div>
			</div>
			<main className="flex-1 relative overflow-y-auto focus:outline-none bg-white shadow rounded-2xl mt-6">
				Profile
			</main>
		</>
	);
};

export default Profile;
