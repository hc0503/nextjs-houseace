import { FaCloudUploadAlt } from "react-icons/fa";

const DropdownFileUpload: React.FC = (): JSX.Element => (
	<>
		<div className="text-xs">
			<div className="flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-light border-dashed rounded-md">
				<div className="space-x-1 text-center flex items-center">
					<FaCloudUploadAlt className="h-5 w-5 text-red" />
					<p className="pl-1">Drag & Drop Files Here or</p>
					<div className="flex">
						<label
							htmlFor="file-upload"
							className="relative cursor-pointer bg-white rounded-md font-medium text-red hover:text-red-dark focus-within:outline-none"
						>
							<span className="underline">Browse files</span>
							<input
								id="file-upload"
								name="file-upload"
								type="file"
								className="sr-only"
							/>
						</label>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default DropdownFileUpload;
