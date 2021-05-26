import React from "react";
import SocialLogin from "react-social-login";

interface Props {
	className?: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	children?: React.ReactNode;
	triggerLogin?: any;
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
					hover:bg-red-dark hover:border-red
					justify-center
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-dark
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
