// import React from 'react'

import classNames from "classnames";
import { useState } from "react";
import Activity from "./Activity";
import Payment from "./Payment";
import Quotes from "./Quotes";
import Tasks from "./Tasks";

type TabProps = {
	className: string;
};

const tabs = [
	{ name: "Activity", target: Activity, current: true },
	{ name: "Tasks & Events", target: Tasks, current: false },
	{ name: "Payments", target: Payment, current: false },
	{ name: "Quotes", target: Quotes, current: false },
];

const Tab = ({ className }: TabProps) => {
	const [tabIndex, setTabIndex] = useState(0);
	return (
		<div>
			<div className={classNames("sm:hidden", className)}>
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
			<div className={classNames("hidden sm:block", className)}>
				<div className="border-b border-gray-200">
					<nav className="-mb-px flex space-x-8" aria-label="Tabs">
						{tabs.map((tab, id) => (
							<button
								key={id}
								onClick={(e) => {
									setTabIndex(id);
								}}
								className={classNames(
									"whitespace-nowrap py-2 px-1 focus:outline-none border-b-2 font-medium text-sm",
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

export default Tab;
