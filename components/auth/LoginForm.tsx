import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { FaGooglePlus, FaFacebook } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";

import axios from "@/lib/axios";
import SocialButton from "./SocialButton";
import AuthInputGroup from "./AuthInputGroup";
import ArrowCircleButton from "./ArrowCircleButton";
import AuthTitle from "./AuthTitle";

interface IErrors {
	email: string[];
	password: string[];
}

const LoginForm: React.FC = (): JSX.Element => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({
		email: [""],
		password: [""],
	} as IErrors);
	const handleFormSubmit = async (
		e: React.SyntheticEvent
	): Promise<void> => {
		e.preventDefault();
		try {
			const res = await axios.post("/api/auth/login", {
				email,
				password,
			});
			if (res.status === 200) {
				router.push("/app");
			}
		} catch (error) {
			setErrors({
				email: error.response.data.errors.email ?? [""],
				password: error.response.data.errors.password ?? [""],
			});
		}
	};
	const handleSocialLoginSuccess = async (user): Promise<void> => {
		try {
			const res = await axios.post("/api/auth/login", {
				email: user._profile.email,
				provider_type: user._provider.toUpperCase(),
			});
			if (res.status === 200) {
				router.push("/app");
			}
		} catch (error) {
			setErrors({
				email: error.response.data.errors.email ?? [""],
				password: error.response.data.errors.password ?? [""],
			});
		}
	};
	const handleSocialLoginFailure = async (error): Promise<void> => {
		console.log(error);
	};
	return (
		<>
			<div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 text-white">
				<div className="mx-auto w-full max-w-sm lg:w-96">
					<AuthTitle />
					<div className="mt-10">
						<form onSubmit={handleFormSubmit} className="space-y-2">
							<AuthInputGroup
								id="email"
								name="email"
								type="email"
								label="Email address"
								placeholder="Email"
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => {
									setEmail(e.target.value);
									setErrors({
										email: [""],
										password: errors?.password,
									});
								}}
								errorMessage={errors?.email[0]}
							>
								<FiMail className="h-5 w-5" aria-hidden="true" />
							</AuthInputGroup>
							<AuthInputGroup
								id="password"
								name="password"
								type="password"
								label="Password"
								placeholder="Password"
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => {
									setPassword(e.target.value);
									setErrors({
										email: errors?.email,
										password: [""],
									});
								}}
							>
								<FiLock className="h-5 w-5" aria-hidden="true" />
							</AuthInputGroup>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember_me"
										name="remember_me"
										type="checkbox"
										className="focus:ring-red-moredark h-4 w-4 text-red-moredark border-gray-300 rounded"
									/>
									<label
										htmlFor="remember_me"
										className="ml-2 block text-sm"
									>
										Remember me
									</label>
								</div>

								<div className="text-sm">
									<a
										href="#"
										className="font-medium hover:text-red-moredark"
									>
										Forgot your password?
									</a>
								</div>
							</div>
							<div className="text-right">
								<ArrowCircleButton type="submit">
									Login
								</ArrowCircleButton>
							</div>
						</form>
					</div>
					<div className="mt-6">
						<div className="mt-1 space-y-2">
							<SocialButton
								provider="google"
								appId={process.env.GOOGLE_ID}
								onLoginSuccess={handleSocialLoginSuccess}
								onLoginFailure={handleSocialLoginFailure}
							>
								<FaFacebook size="23" className="mr-1" />
								Login with Facebook
							</SocialButton>
							<SocialButton
								provider="google"
								appId={process.env.GOOGLE_ID}
								onLoginSuccess={handleSocialLoginSuccess}
								onLoginFailure={handleSocialLoginFailure}
							>
								<FaGooglePlus size="23" className="mr-1" />
								Login with Google
							</SocialButton>
						</div>
					</div>
					<div className="text-center py-3 px-3 mt-20">
						<p className="text-sm">
							Still no account? Please
							<Link href="/auth/register">
								<a className="font-bold hover:text-red-moredark">
									{" "}
									Register Now
								</a>
							</Link>
						</p>
						<p className="text-xs">
							Copyright @ 2021 HOUSEACE GROUP PTY LTD. All Rights
							Reserved
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginForm;
