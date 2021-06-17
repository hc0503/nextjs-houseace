import SearchInput from "./SearchInput";
import NotificationButton from "./NotificationButton";
import HamburgerNav from "./HamburgerNav";
import ProfileDropdown from "./ProfileDropdown";

interface Props {
	setSidebarOpen: (sidebarOpen: boolean) => void;
}
const TopBar: React.FC<Props> = ({ setSidebarOpen }): JSX.Element => {
	return (
		<>
			<div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow rounded-2xl">
				<HamburgerNav setSidebarOpen={setSidebarOpen} />
				<div className="flex-1 px-4 flex justify-between">
					<div className="flex-1 flex">
						<SearchInput
							id="search_field"
							placeHolder="Search"
							name="search"
						/>
					</div>
					<div className="ml-4 flex items-center md:ml-6">
						<NotificationButton />
						<ProfileDropdown />
					</div>
				</div>
			</div>
		</>
	);
};

export default TopBar;
