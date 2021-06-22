import { AiOutlineCamera } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { successToast } from "../../../../lib/global-functions";
import { updateCompanyLogo } from "../../../../redux/reducers/account/companyReducer";
import Avatar from "../Profile/Avatar";
import FileUploadButton from "./FileUploadButton";

const CompanyHero: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const handleUpdateLogo = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const body = new FormData();
		body.append("file", e.target.files[0]);
		dispatch(updateCompanyLogo(body));
		successToast("update successfully.");
	};
	return (
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
					onChange={handleUpdateLogo}
				/>
			</div>
			<FileUploadButton name="company_hero" id="company_hero">
				<AiOutlineCamera className="h-7 w-7" aria-hidden="true" />
			</FileUploadButton>
		</div>
	);
};

export default CompanyHero;
