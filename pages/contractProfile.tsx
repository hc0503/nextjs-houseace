import React from "react";
import NavBar from "../components/landing/NavBar/NavBar";
import ReactStars from "react-rating-stars-component";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import SocialShareButton from "../components/app/Account/Company/SocialShareButton";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiRectangle } from "react-icons/bi";
import GoogleMap from "google-map-react";

function ContractProfile() {
	return (
		<div>
			<div className="bg-contract-profile bg-no-repeat bg-cover h-122">
				<NavBar />
			</div>
			<div className="md:mx-16 mx-2">
				<div className="sm:flex">
					<div
						className="focus:outline-none bg-white shadow rounded-2xl sm:h-100 sm:min-w-100 w-72 h-72 bg-no-repeat"
						style={{
							marginTop: "-170px",
							backgroundSize: "80% 80%",
							backgroundPosition: "center",
							backgroundImage:
								'url("images/contract_profile/profile.png")',
						}}
					></div>
					<div className="w-full">
						<div className="sm:flex justify-between items-start">
							<div className="sm:mx-0 mx-2 sm:ml-8 mt-6">
								<p className="sm:text-4xl text-2xl font-black text-black">
									Interior Architect
								</p>
								<div className="flex items-center mt-3">
									<ReactStars
										size={25}
										count={5}
										edit={false}
										value={5}
										emptyIcon={<AiOutlineStar />}
										filledIcon={<AiFillStar />}
									/>
									<p className="text-lg ml-4">(5.00)</p>
								</div>
								<p className="text-lg mt-3">128 Reviews</p>
							</div>
							<div className="sm:flex items-center md:space-x-5 space-x-1 mt-6 sm:ml-0 ml-2">
								<SocialShareButton>
									<FaFacebookF className="sm:w-6 w-5 sm:h-6 h-5" />
								</SocialShareButton>
								<SocialShareButton>
									<FaTwitter className="sm:w-6 w-5 sm:h-6 h-5" />
								</SocialShareButton>
								<SocialShareButton>
									<FaLinkedinIn className="sm:w-6 w-5 sm:h-6 h-5" />
								</SocialShareButton>
							</div>
						</div>
						<div className="mt-5 sm:mx-0 mx-2 sm:ml-8 border-t border-b">
							<div className="sm:flex justify-between w-1/2 hidden">
								<div className="h-16">
									<div className="text-sm mt-2">License Number</div>
									<div className="text-sm mt-2 text-black flex items-center">
										<BiRectangle className="h-4 w-4 text-red mr-3.5" />
										5348 5891
									</div>
								</div>
								<div className="h-16">
									<div className="text-sm mt-2">Year Founded</div>
									<div className="text-sm mt-2 text-black flex items-center">
										<BiRectangle className="h-4 w-4 text-red mr-3.5" />
										2012
									</div>
								</div>
								<div className="h-16">
									<div className="text-sm mt-2">ABN Number</div>
									<div className="text-sm mt-2 text-black flex items-center">
										<BiRectangle className="h-4 w-4 text-red mr-3.5" />
										5348 5891
									</div>
								</div>
							</div>
							<div className="sm:hidden">
								<div className="h-8 mt-2 flex items-center">
									<div className="text-sm w-32">License Number</div>
									<div className="text-sm text-black flex items-center">
										<BiRectangle className="h-4 w-4 text-red mr-3.5" />
										5348 5891
									</div>
								</div>
								<div className="h-8 flex items-center">
									<div className="text-sm w-32">Year Founded</div>
									<div className="text-sm text-black flex items-center">
										<BiRectangle className="h-4 w-4 text-red mr-3.5" />
										2012
									</div>
								</div>
								<div className="h-8 mb-2 flex items-center">
									<div className="text-sm w-32">ABN Number</div>
									<div className="text-sm text-black flex items-center">
										<BiRectangle className="h-4 w-4 text-red mr-3.5" />
										5348 5891
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="md:mx-16 mx-4 sm:text-lg text-sm sm:mt-10 leading-6 mt-4 sm:pb-10 pb-4 border-b">
				It was popularised in the 1960s with the release of Letraset
				sheets containing Lorem Ipsum passages, and more recently with
				desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum It was popularised in the 1960s with
				the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software
				like Aldus PageMaker including versions of Lorem Ipsum
			</div>
			<div className="md:mx-16 mx-4">
				<p className="sm:text-2xl text-xl font-bold mt-10">
					Location
				</p>
				<div className="sm:flex">
					<div className="w-full sm:h-80 h-56 mt-5">
						<GoogleMap
							// apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
							center={[59.938043, 30.337157]}
							zoom={11}
						></GoogleMap>
					</div>
					<div className="focus:outline-none bg-white shadow-md rounded-2xl sm:ml-2 sm:min-w-100 sm:w-100 w-full sm:h-80 h-56 mt-5 flex items-center">
						<div className="text-center w-full">
							<div className="flex justify-center">
								<img
									className="sm:h-28 h-20 xl:w-28 w-20 rounded-full"
									src="images/contract_profile/user.png"
									alt=""
								/>
							</div>
							<p className="sm:text-lg text-sm font-bold mt-5">
								Matthew S Duff
							</p>
							<div className="flex justify-center sm:mt-10 mt-6">
								<button className="rounded-full border border-red focus:outline-none transition duration-500 ease-in-out sm:px-14 px-4 sm:py-4 py-2 text-base hover:text-red text-white hover:bg-white bg-red">
									Message
								</button>
								<button className="rounded-full border border-red focus:outline-none transition duration-500 ease-in-out sm:px-14 px-4 sm:py-4 py-2 text-base text-red hover:text-white bg-white hover:bg-red ml-3">
									Quote
								</button>
							</div>
						</div>
					</div>
				</div>
				<p className="sm:text-2xl text-xl font-bold mt-10">Photos</p>
			</div>
		</div>
	);
}

export default ContractProfile;
