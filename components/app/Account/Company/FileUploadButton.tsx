interface IProps extends IInput {
	children: React.ReactNode;
}

const FileUploadButton: React.FC<IProps> = ({
	id,
	name,
	type = "file",
	children,
}): JSX.Element => (
	<>
		<label className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white hover:bg-white hover:text-gray focus:outline-none absolute bottom-5 right-5 cursor-pointer">
			{children}
			<input type={type} className="hidden" name={name} id={id} />
		</label>
	</>
);

export default FileUploadButton;
