import classNames from "classnames";
import { useState } from "react";

import AccountProfile from "./AccountProfile";
import AccountCompany from "./AccountCompany";
import AccountPricing from "./AccountPricing";
import AccountCalendar from "./AccountCalendar";

const tabs = [
	{ name: "Profile", target: AccountProfile, current: true },
	{ name: "Company", target: AccountCompany, current: true },
	{ name: "Pricing", target: AccountPricing, current: true },
	{ name: "Calendar", target: AccountCalendar, current: true },
];

const AccountTab: React.FC = (): JSX.Element => {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<div>
			<div className={classNames("sm:hidden")}>
				<select
					id="tabs"
					name="tabs"
					className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
					defaultValue={tabs[tabIndex].name}
				>
					{tabs.map((tab) => (
						<option key={tab.name}>{tab.name}</option>
					))}
				</select>
			</div>
			<div className={classNames("hidden sm:block")}>
				<div className="ml-2 border-b border-gray-200">
					<nav className="-mb-px flex space-x-8" aria-label="Tabs">
						{tabs.map((tab, id) => (
							<button
								key={id}
								onClick={(e) => {
									setTabIndex(id);
								}}
								className={classNames(
									"whitespace-nowrap py-2 px-1 focus:outline-none border-b-2 font-montserrat-medium text-sm",
									{
										"border-red text-red": tabIndex === id,
										"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300":
											tabIndex !== id,
									}
								)}
								aria-current={tabIndex === id ? "page" : undefined}
							>
								{tab.name}
							</button>
						))}
					</nav>
				</div>
			</div>
			{tabs.map(
				(tab, id) => tabIndex === id && <tab.target key={id} />
			)}
		</div>
	);
};

export default AccountTab;