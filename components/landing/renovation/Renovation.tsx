import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

import DownloadButton from "./DownloadButton";

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
					<DownloadButton>
						<div className="flex items-center space-x-2.5">
							<FaAppStoreIos height={24} width={24} /> Get it on IOS
						</div>
					</DownloadButton>
					<DownloadButton>
						<div className="flex items-center space-x-2.5">
							<FaGooglePlay height={24} width={24} /> Get it on
							Android
						</div>
					</DownloadButton>
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
