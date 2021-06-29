import classNames from "classnames";
import { FaTrashAlt } from "react-icons/fa";

interface IProps {
	imageUrl: string;
}

const UploadItem: React.FC<IProps> = ({ imageUrl }): JSX.Element => (
	<>
		<div className="flex-grow lg:flex-grow-0 lg:flex-shrink-0 left-0 top-0 z-50">
			<div className="flex items-center justify-center">
				<div className={classNames("relative rounded-lg mb-2")}>
					<img
						className="rounded-lg h-24 w-24 object-cover"
						src={imageUrl}
						alt=""
					/>
					<span className="absolute inset-0 bg-gray-dark bg-opacity-75 flex items-center justify-center text-sm text-gray-dark opacity-0 hover:opacity-100 rounded-lg">
						<button className="bg-white rounded-full p-1 hover:text-red focus:outline-none">
							<FaTrashAlt className="h-5 w-5" />
						</button>
					</span>
				</div>
			</div>
		</div>
	</>
);

export default UploadItem;
