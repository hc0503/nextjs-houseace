import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

import RoundButton from "./RoundButton";

const Renovation: React.FC = (): JSX.Element => {
	return (
		<div className="flex justify-between rounded-3xl items-center bg-gradient-to-r from-gray-200">
			<div className="pl-28 pb-14">
				<div className="pt-14">
					<p className="text-4xl font-bold">
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
							&nbsp;Get it on IOS
						</div>
					</RoundButton>
					<RoundButton>
						<div className="flex items-center">
							<FaGooglePlay height={24} width={24} />
							&nbsp;Get it on Android
						</div>
					</RoundButton>
				</div>
			</div>
			<div>
				<img
					src="/images/landing/appblock.png"
					alt="Appblock"
					height={530}
					width={603}
				/>
			</div>
		</div>
	);
};

export default Renovation;
