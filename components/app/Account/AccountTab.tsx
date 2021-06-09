import classNames from "classnames";
import React, { useState } from "react";

import Profile from "./Profile/Profile";
import AccountCompany from "./AccountCompany";
import AccountPricing from "./AccountPricing";
import AccountCalendar from "./AccountCalendar";

const tabs: ITab[] = [
	{ name: "Profile", target: Profile },
	{ name: "Company", target: AccountCompany },
	{ name: "Pricing", target: AccountPricing },
	{ name: "Calendar", target: AccountCalendar },
];

const AccountTab: React.FC = (): JSX.Element => {
	const [tabName, setTabName] = useState(tabs[0].name);

	return (
		<div>
			<div className={classNames("sm:hidden mt-2")}>
				<select
					id="tabs"
					name="tabs"
					className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 sm:text-sm rounded-md"
					defaultValue={tabName}
					onBlur={(e: React.FormEvent<HTMLSelectElement>) => {
						setTabName(e.currentTarget.value);
					}}
				>
					{tabs.map((tab: ITab, key: number) => (
						<option key={key}>{tab.name}</option>
					))}
				</select>
			</div>
			<div className={classNames("hidden sm:block")}>
				<div className="ml-2 border-b border-gray-200">
					<nav
						className="flex space-x-8 pl-10 mt-10"
						aria-label="Tabs"
					>
						{tabs.map((tab: ITab, key: number) => (
							<button
								key={key}
								onClick={() => {
									setTabName(tab.name);
								}}
								className={classNames(
									"whitespace-nowrap py-2 px-1 focus:outline-none border-b-2 font-montserrat-medium text-sm",
									{
										"border-red text-red": tabName === tab.name,
										"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300":
											tabName !== tab.name,
									}
								)}
								aria-current={
									tabName === tab.name ? "page" : undefined
								}
							>
								{tab.name}
							</button>
						))}
					</nav>
				</div>
			</div>
			{tabs.map(
				(tab: ITab, key: number) =>
					tabName === tab.name && <tab.target key={key} />
			)}
		</div>
	);
};

export default AccountTab;
