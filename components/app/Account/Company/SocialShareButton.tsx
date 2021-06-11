const SocialShareButton: React.FC<IButton> = ({ children }) => (
	<>
		<button className="rounded-full hover:text-red focus:outline-none">
			{children}
		</button>
	</>
);

export default SocialShareButton;
