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
			<div className="grid md:grid-cols-2 grid-cols-1 pt-16 pb-24">
				<div className="md:pr-20">
					<Link href="/">
						<a>
							<img
								src="/logo.png"
								alt="Logo"
								height={69}
								width="auto"
							/>
						</a>
					</Link>
					<p className="pt-9 text-base">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et dolore
						magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam
					</p>
					<div className="flex pt-9 justify-between">
						<RoundButton
							fontSize="xl:text-base md:text-sm text-xs"
							padding="px-10 py-4"
						>
							<div className="flex items-center">
								<FaAppStoreIos height={24} width="auto" />
								<span className="md:block hidden">
									&nbsp;Get it on IOS
								</span>
							</div>
						</RoundButton>
						<RoundButton
							fontSize="xl:text-base md:text-sm text-xs"
							padding="px-10 py-4"
						>
							<div className="flex items-center">
								<FaGooglePlay height={24} width="auto" />
								<span className="md:block hidden">
									&nbsp;Get it on Android
								</span>
							</div>
						</RoundButton>
					</div>
				</div>
				<div className="grid grid-cols-2 md:pt-0 pt-2">
					<div>
						<h3 className="text-2xl font-montserrat-bold">Help</h3>
						<div className="grid col-1 pt-16 space-y-4 text-base">
							{navigation.help.map((item: INavItem, key: number) => (
								<Link href={item.href} key={`HelpNav-${key}`}>
									<a>{item.name}</a>
								</Link>
							))}
						</div>
					</div>
					<div>
						<h3 className="text-2xl font-montserrat-bold">
							About Us
						</h3>
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
			<div className="md:flex justify-between py-10 text-sm text-gray-light">
				<p className="">
					Copyright © 2021 HOUSEACE GROUP PTY LTD. All Rights Reserved
				</p>
				<div className="flex space-x-20 md:pt-0 pt-2">
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
