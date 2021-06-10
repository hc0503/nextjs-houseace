import { FaCloudUploadAlt } from "react-icons/fa";

const FileUpload: React.FC = (): JSX.Element => (
	<>
		<div className="mt-1 sm:mt-0 sm:col-span-2 text-xs">
			<div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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

export default FileUpload;
