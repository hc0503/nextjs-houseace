import Link from "next/link";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

import RoundButton from "../renovation/RoundButton";

interface INavItem {
	name: string;
	href: string;
}
interface INavigation {
	help: INavItem[];
	aboutUs: INavItem[];
}
const navigation: INavigation = {
	help: [
		{ name: "FAQ", href: "#" },
		{ name: "Terms & Conditions", href: "#" },
		{ name: "Privacy", href: "#" },
		{ name: "Login/Sign Up", href: "#" },
		{ name: "Contractors", href: "#" },
		{ name: "Project Managers", href: "#" },
	],
	aboutUs: [
		{ name: "About us", href: "#" },
		{ name: "Customer Reviews", href: "#" },
		{ name: "Renovation Calculator", href: "#" },
		{ name: "Instant Quotes", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Contractor Vetting", href: "#" },
	],
};
const Footer: React.FC = (): JSX.Element => {
	return (
		<footer>
			<div className="grid grid-cols-2 pt-16 pb-24">
				<div>
					<Link href="/">
						<a>
							<img
								src="/logo.png"
								alt="Logo"
								height={69}
								width={232}
							/>
						</a>
					</Link>
					<p className="pt-9 text-base">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam
						<br />
						nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam
						<br />
						erat, sed diam voluptua. At vero eos et accusam{" "}
					</p>
					<div className="flex pt-9 space-x-7">
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
				<div className="grid grid-cols-2">
					<div>
						<h3 className="text-2xl font-bold">Help</h3>
						<div className="grid col-1 pt-16 space-y-4 text-base">
							{navigation.help.map((item: INavItem, key: number) => (
								<Link href={item.href} key={`HelpNav-${key}`}>
									<a>{item.name}</a>
								</Link>
							))}
						</div>
					</div>
					<div>
						<h3 className="text-2xl font-bold">About Us</h3>
						<div className="grid col-1 pt-16 space-y-4 text-base">
							{navigation.aboutUs.map(
								(item: INavItem, key: number) => (
									<Link href={item.href} key={`AboutUsNav-${key}`}>
										<a>{item.name}</a>
									</Link>
								)
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between py-10 px-12 text-sm text-gray-light">
				<p className="">
					Copyright © 2021 HOUSEACE GROUP PTY LTD. All Rights Reserved
				</p>
				<div className="flex space-x-20">
					<Link href="#">
						<a>Privacy Policy</a>
					</Link>
					<Link href="#">
						<a>Terms of Service</a>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
