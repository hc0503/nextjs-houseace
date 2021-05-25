const AuthBackground: React.FC = (): JSX.Element => {
	return (
		<>
			<div className="hidden lg:block relative w-0 flex-1">
				<img
					className="absolute inset-0 h-full w-full object-cover"
					src="/images/auth/bg_login.png"
					alt=""
				/>
			</div>
		</>
	);
};

export default AuthBackground;
