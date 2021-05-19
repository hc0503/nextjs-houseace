import React, { useState } from "react";
import Link from "next/link";
import { signIn, SignInResponse } from "next-auth/client";
import { useRouter } from "next/router";
import Head from "next/head";

import Layout from "@/components/layout/Page";
import Button from "@/components/commons/buttons/Button";
import SocialButton from "@/components/auth/SocialButton";
import TextInput from "@/components/commons/inputs/TextInput";
import CheckboxInput from "@/components/commons/inputs/CheckboxInput";
import HrefLink from "@/components/commons/buttons/HrefLink";
import Label from "@/components/commons/labels/Label";
import Logo from "@/components/commons/Logo";
import ValidationAlert from "@/components/commons/inputs/ValidationAlert";

const Login: React.FC = (): JSX.Element => {
	const textColor = "text-gray";
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const router = useRouter();
	const [loginErrors, setLoginErrors] = useState({
		email: "",
	});
	const handleFormSubmit = async (
		e: React.SyntheticEvent
	): Promise<void> => {
		e.preventDefault();
		e.stopPropagation();
		signIn("credentials", {
			email,
			password,
			callbackUrl: `${process.env.BASE_URL}`,
			redirect: false,
		}).then((res: SignInResponse) => {
			if (res.ok) {
				router.push(res.url);
			} else {
				if (res.status === 401)
					setLoginErrors({
						email: "The credentials are incorrect.",
					});
			}
		});
	};

	return (
		<>
			<Head>
				<title>{`${process.env.APP_NAME}-Login`}</title>
			</Head>
			<Layout>
				<div className="h-screen flex p-2">
					<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default px-10 py-10">
						<div className="flex justify-center">
							<Link href="/">
								<a>
									<Logo src="/logo.png" alt="Houseace" />
								</a>
							</Link>
						</div>
						<form
							onSubmit={handleFormSubmit}
							className="space-y-2 mt-4"
						>
							<div>
								<Label htmlFor="email">Email</Label>
								<TextInput
									type="email"
									id="email"
									placeholder="Your Email"
									onChange={(e: any) => setEmail(e.target.value)}
								/>
								<ValidationAlert>{loginErrors.email}</ValidationAlert>
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
									<Label
										htmlFor="remember_me"
										className={`ml-2 block`}
									>
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
											src="/images/icons/socials/google.svg"
											className="h-5 mr-1"
											alt="Google"
										/>
										With Google
									</SocialButton>
									<SocialButton>
										<img
											src="/images/icons/socials/facebook.svg"
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
		</>
	);
};

export default Login;
