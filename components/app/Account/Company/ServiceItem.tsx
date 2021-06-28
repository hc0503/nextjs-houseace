interface IProps {
	name: string;
	onDelete: () => void;
}

const ServiceItem: React.FC<IProps> = ({
	name,
	onDelete,
}): JSX.Element => (
	<>
		<span className="border border-red rounded-full bg-red-lesslight text-red font-montserrat-semibold text-sm py-2 px-7">
			{name}
			<button
				className="ml-1 text-black px-1 hover:text-red focus:outline-none"
				onClick={onDelete}
			>
				x
			</button>
		</span>
	</>
);

export default ServiceItem;
