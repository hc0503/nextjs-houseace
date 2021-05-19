import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getCsrfToken, signIn, useSession } from "next-auth/client";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { login, logout } from "@/redux/slices/authSlice";
import Layout from "../../components/layout/Page";
import Button from "../../components/commons/buttons/Button";
import SocialButton from "../../components/auth/SocialButton";
import TextInput from "../../components/commons/inputs/TextInput";
import CheckboxInput from "../../components/commons/inputs/CheckboxInput";
import HrefLink from "../../components/commons/buttons/HrefLink";
import Label from "../../components/commons/labels/Label";
import Logo from "@/components/commons/Logo";

const Login: React.FC<any> = ({ csrfToken }): JSX.Element => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const router = useRouter();
	const [loginError, setLoginError] = useState("");
	const [session, loading] = useSession();
	const handleFormSubmit = async (
		e: React.SyntheticEvent
	): Promise<void> => {
		e.preventDefault();
		e.stopPropagation();
		signIn("credentials", {
			email,
			password,
			callbackUrl: "http://localhost:3000",
			redirect: false,
		}).then((res) => {
			router.push(res.url);
		});
	};
	const textColor = "text-gray";
	useEffect(() => {
		// Getting the error details from URL
		if (router.query.error) {
			console.log(router.query.error);
		}
	}, [router]);

	return (
		<Layout>
			<div className="h-screen flex p-2">
				<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default px-10 py-10">
					<div className="flex justify-center">
						<Link href="/">
							<a>
								<Logo src="../logo.png" alt="Houseace" />
							</a>
						</Link>
					</div>
					<form
						method="post"
						action="/api/auth/callback/credentials"
						onSubmit={handleFormSubmit}
					>
						<input
							name="csrfToken"
							type="hidden"
							defaultValue={csrfToken}
						/>
						<div>
							<Label htmlFor="email">Email</Label>
							<TextInput
								type="email"
								id="email"
								placeholder="Your Email"
								onChange={(e: any) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<Label htmlFor="password">Password</Label>
							<TextInput
								type="password"
								id="password"
								placeholder="Your Password"
								onChange={(e: any) => setPassword(e.target.value)}
							/>
						</div>
						<div className="grid md:grid-cols-2 grid-cols-1 gap-5">
							<div className="flex items-center">
								<CheckboxInput
									type="checkbox"
									id="remember_me"
									onChange={(e: any) =>
										setRememberMe(e.target.checked)
									}
								/>
								<Label htmlFor="remember_me" className={`ml-2 block`}>
									Remember me
								</Label>
							</div>
							<div>
								<HrefLink href="/auth/forgot-password">
									Forgot your password?
								</HrefLink>
							</div>
						</div>
						<div className="mt-6">
							<Button type="submit" disabled={false}>
								Sign In
							</Button>
						</div>
						<div className="py-3">
							<Label>Or sign in with</Label>
							<div className="grid md:grid-cols-2 grid-cols-1 gap-5 py-3">
								<SocialButton>
									<img
										src="../../images/icons/socials/google.svg"
										className="h-5 mr-1"
										alt="Google"
									/>
									With Google
								</SocialButton>
								<SocialButton>
									<img
										src="../../images/icons/socials/facebook.svg"
										className="h-7 mr-1"
										alt="Google"
									/>
									With Facebook
								</SocialButton>
							</div>
						</div>
						<div className="text-center py-3 px-3">
							<p className={textColor}>
								Still no account? Please go to{" "}
								<HrefLink href="/auth/register"> Sign Up</HrefLink>
							</p>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (
	context
) => {
	const csrfToken = await getCsrfToken(context);
	return {
		props: { csrfToken },
	};
};

export default Login;
