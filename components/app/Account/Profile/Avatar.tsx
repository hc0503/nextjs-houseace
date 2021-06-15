import { AiOutlineCamera } from "react-icons/ai";
import classNames from "classnames";

interface IProps {
	imageUrl: string;
	size?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Avatar: React.FC<IProps> = ({
	imageUrl,
	size = "h-52 w-52",
	onChange,
}): JSX.Element => {
	return (
		<div className="flex-grow lg:flex-grow-0 lg:flex-shrink-0 left-0 top-0 z-50">
			<div className="mt-1 lg:hidden">
				<div className="flex items-center">
					<div
						className={classNames(
							"flex-shrink-0 inline-block rounded-full overflow-hidden h-24 w-24"
						)}
						aria-hidden="true"
					>
						<img
							className="rounded-full h-full w-full"
							src={imageUrl}
							alt=""
						/>
					</div>
					<div className="ml-5 rounded-md shadow-sm">
						<div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500">
							<label
								htmlFor="user_photo"
								className="relative text-sm leading-4 font-medium text-gray-700"
							>
								<span>Change</span>
							</label>
							<input
								id="user_photo"
								name="user_photo"
								type="file"
								className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center">
				<div
					className={classNames(
						"hidden relative rounded-full overflow-hidden lg:block",
						size
					)}
				>
					<img
						className="rounded-full h-full w-full object-cover"
						src={imageUrl}
						alt=""
					/>
					<label
						htmlFor="user_photo"
						className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm text-white opacity-0 hover:opacity-100"
					>
						<span className="absolute -bottom-0">
							<AiOutlineCamera className="h-9 w-9" />
						</span>
						<input
							type="file"
							id="user_photo"
							name="user_photo"
							className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
							accept="image/*"
							onChange={onChange}
						/>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Avatar;
