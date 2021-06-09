import { AiOutlineCamera } from "react-icons/ai";

import Avatar from "../Profile/Avatar";

export const Company: React.FC = (): JSX.Element => {
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
		</>
	);
};

export default Company;
