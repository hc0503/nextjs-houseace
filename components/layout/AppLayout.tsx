import React, { useState } from "react";

import TopBar from "@/components/app/TopBar/TopBar";
import SideBar from "@/components/app/SideBar/SideBar";

interface Props {
	children?: React.ReactNode;
	user?: any;
}

const AppLayout: React.FC<Props> = ({ children }): JSX.Element => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<div className="h-screen flex overflow-hidden bg-gray-100">
			<SideBar
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
			/>

			<div className="flex flex-col w-0 flex-1 overflow-hidden m-4">
				<TopBar setSidebarOpen={setSidebarOpen} />
				<main className="overflow-y-auto">{children}</main>
			</div>
		</div>
	);
};

export default AppLayout;
