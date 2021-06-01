const DownloadButton: React.FC<IButton> = ({
	children,
}): JSX.Element => {
	return (
		<button className="px-14 py-4 rounded-full bg-white hover:bg-red-lesslight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-light transition duration-500 ease-in-out transform hover:scale-100">
			{children}
		</button>
	);
};

export default DownloadButton;
