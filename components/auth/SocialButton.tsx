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
	render() {
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
					items-center
					px-4
					py-2
					border
					border-red-300
					shadow-sm
					text-sm
					font-medium
					rounded-md
					text-gray-dark
					bg-white
					hover:bg-red-lesslight
					focus:outline-none
					focus:ring-1
					focus:ring-red
					justify-center
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
