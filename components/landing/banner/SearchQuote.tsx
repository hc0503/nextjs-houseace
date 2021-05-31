import ArrowCircleButton from "@/components/auth/ArrowCircleButton";
import SearchInputGroup from "./SearchInputGroup";

const SearchQuote: React.FC = (): JSX.Element => {
	return (
		<div className="flex space-x-2 rounded-full items-center bg-white pl-4 pr-1 py-1 text-left">
			<SearchInputGroup
				label="Project Category"
				className="w-72"
				placeholder="Renovations, flooring, painting & more"
			/>
			<SearchInputGroup
				label="Postcode"
				className="w-52"
				placeholder="Where you live?"
			/>
			<div className="w-48 text-right">
				<ArrowCircleButton className="">
					Instant Quote
				</ArrowCircleButton>
			</div>
		</div>
	);
};

export default SearchQuote;
