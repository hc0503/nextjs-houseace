import React from "react";
import SocialLogin from "react-social-login";

interface Props {
	className?: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	children?: React.ReactNode;
	triggerLogin?: () => void;
}
class SocialButton extends React.Component<Props> {
	render(): JSX.Element {
		const {
			className = "",
			type = "button",
			disabled = false,
			children,
			triggerLogin,
		} = this.props;

		return (
			<button
				className={`
					inline-flex
					w-full
					items-center
					p-2
					border
					rounded-md
					hover:bg-red-dark hover:border-red-dark
					transition duration-500
					justify-center
					focus:outline-none
					${className}
				`}
				disabled={disabled}
				type={type}
				onClick={triggerLogin}
			>
				{children}
			</button>
		);
	}
}

export default SocialLogin(SocialButton);
