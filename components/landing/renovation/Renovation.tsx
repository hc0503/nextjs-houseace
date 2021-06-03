import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

import RoundButton from "./RoundButton";

const Renovation: React.FC = (): JSX.Element => {
	return (
		<div className="grid md:grid-cols-2 grid-cols-1 justify-items-center rounded-3xl items-center bg-gradient-to-r from-red-150">
			<div className="md:pl-28 px-5 pb-14">
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
						throughout your
						<br />
						project with the Houseace app - Get messages and updates
						from
						<br />
						your team directly to your phone.
					</p>
				</div>
				<div className="pt-32 flex justify-between">
					<RoundButton>
						<div className="flex items-center">
							<FaAppStoreIos height={24} width={24} />
							<span className="xl:block hidden">
								&nbsp;Get it on IOS
							</span>
						</div>
					</RoundButton>
					<RoundButton>
						<div className="flex items-center">
							<FaGooglePlay height={24} width={24} />
							<span className="xl:block hidden">
								&nbsp;Get it on Android
							</span>
						</div>
					</RoundButton>
				</div>
			</div>
			<div>
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
