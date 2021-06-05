import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

import RoundButton from "./RoundButton";

const Renovation: React.FC = (): JSX.Element => {
	return (
		<div className="md:flex justify-items-center rounded-3xl items-center bg-gradient-to-r from-red-150">
			<div className="px-5 pb-14 md:w-2/3 w-full">
				<div className="md:pl-28 xl:pr-20">
					<div className="pt-14">
						<p className="text-4xl font-montserrat-bold">
							Your Renovation Sidekick
						</p>
					</div>
					<div className="pt-3.5">
						<p className="text-2xl text-gray-light">
							At your fingertips
						</p>
					</div>
					<div className="pt-20">
						<p className="text-base text-gray-light">
							Keep a finger on the pulse and stay and stay informed
							throughout your project with the Houseace app - Get
							messages and updates from your team directly to your
							phone.
						</p>
					</div>
					<div className="pt-32 flex space-x-4">
						<RoundButton
							fontSize="xl:text-base md:text-sm text-xs"
							padding="px-10 py-4"
							bgColor="white hover:bg-black"
						>
							<div className="flex items-center">
								<FaAppStoreIos />
								<span className="md:block hidden">
									&nbsp;Get it on IOS
								</span>
							</div>
						</RoundButton>
						<RoundButton
							fontSize="xl:text-base md:text-sm text-xs"
							padding="px-10 py-4"
							bgColor="white hover:bg-black"
						>
							<div className="flex items-center">
								<FaGooglePlay />
								<span className="md:block hidden">
									&nbsp;Get it on Android
								</span>
							</div>
						</RoundButton>
					</div>
				</div>
			</div>
			<div className="md:w-1/3 w-full">
				<img
					src="/images/landing/appblock.png"
					alt="Appblock"
					className="w-full h-auto"
				/>
			</div>
		</div>
	);
};

export default Renovation;
