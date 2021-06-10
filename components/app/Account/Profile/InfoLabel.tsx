import classNames from "classnames";

interface IProps {
	label: string;
	icon: React.ReactNode;
	value: string;
	valueClass?: string;
}

const InfoLabel: React.FC<IProps> = ({
	label,
	icon,
	value,
	valueClass,
}): JSX.Element => {
	return (
		<div className="">
			<div className="flex space-x-2">
				<div className="flex items-end">
					<div className="flex items-center h-7">{icon}</div>
				</div>
				<div className="flex flex-wrap items-stretch">
					<p className="text-xs w-full">{label}</p>
					<p
						className={classNames("xl:text-lg text-base", valueClass)}
					>
						{value}
					</p>
				</div>
			</div>
		</div>
	);
};

export default InfoLabel;
