import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import axios from "@/lib/axios";
import Layout from "@/components/layout/Page";
import Button from "@/components/commons/buttons/Button";
import SocialButton from "@/components/auth/SocialButton";
import TextInput from "@/components/commons/inputs/TextInput";
import CheckboxInput from "@/components/commons/inputs/CheckboxInput";
import HrefLink from "@/components/commons/buttons/HrefLink";
import Label from "@/components/commons/labels/Label";
import Logo from "@/components/commons/Logo";
import ValidationAlert from "@/components/commons/inputs/ValidationAlert";

interface IErrors {
	first_name?: string[];
	last_name?: string[];
	email?: string[];
	password?: string[];
	password_confirmation?: string[];
}

const Register: React.FC = (): JSX.Element => {
	const textColor = "text-gray-500";
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [password, setPassword] = useState("");
	const [password_confirmation, setPassword_confirmation] =
		useState("");
	const [errors, setErrors] = useState({
		first_name: [""],
		last_name: [""],
		email: [""],
		password: [""],
		password_confirmation: [""],
	} as IErrors);
	const handleFormSubmit = async (
		e: React.SyntheticEvent
	): Promise<void> => {
		e.preventDefault();

		try {
			const res = await axios.post("/api/auth/register", {
				first_name,
				last_name,
				email,
				password,
				password_confirmation,
			});
			if (res.status === 201) {
				router.push("/app");
			}
		} catch (error) {
			setErrors({
				first_name: error.response.data.errors.first_name ?? [""],
				last_name: error.response.data.errors.last_name ?? [""],
				email: error.response.data.errors.email ?? [""],
				password: error.response.data.errors.password ?? [""],
				password_confirmation: error.response.data.errors
					.password_confirmation ?? [""],
			});
		}
	};

	return (
		<>
			<Head>
				<title>{`${process.env.APP_NAME}-Register`}</title>
			</Head>
			<Layout>
				<div className="md:h-screen h-full flex p-2">
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
								<Label htmlFor="first_name">First Name</Label>
								<TextInput
									type="text"
									id="first_name"
									placeholder="First Name"
									onChange={(
										e: React.ChangeEvent<HTMLInputElement>
									) => setFirst_name(e.target.value)}
								/>
								<ValidationAlert className="text-sm">
									{errors.first_name[0]}
								</ValidationAlert>
							</div>
							<div>
								<Label htmlFor="last_name">Last Name</Label>
								<TextInput
									type="text"
									id="last_name"
									placeholder="Last Name"
									onChange={(
										e: React.ChangeEvent<HTMLInputElement>
									) => setLast_name(e.target.value)}
								/>
								<ValidationAlert className="text-sm">
									{errors.last_name[0]}
								</ValidationAlert>
							</div>
							<div>
								<Label htmlFor="email">Email</Label>
								<TextInput
									type="email"
									id="email"
									placeholder="Email"
									onChange={(
										e: React.ChangeEvent<HTMLInputElement>
									) => setEmail(e.target.value)}
								/>
								<ValidationAlert className="text-sm">
									{errors.email[0]}
								</ValidationAlert>
							</div>
							<div>
								<Label htmlFor="password">New Password</Label>
								<TextInput
									type="password"
									id="password"
									placeholder="New Password"
									autoComplete="on"
									onChange={(
										e: React.ChangeEvent<HTMLInputElement>
									) => setPassword(e.target.value)}
								/>
								<ValidationAlert className="text-sm">
									{errors.password[0]}
								</ValidationAlert>
							</div>
							<div>
								<Label htmlFor="confirm_password">
									Conform Password
								</Label>
								<TextInput
									type="password"
									id="confirm_password"
									placeholder="Confirm Password"
									onChange={(
										e: React.ChangeEvent<HTMLInputElement>
									) => setPassword_confirmation(e.target.value)}
								/>
								<ValidationAlert className="text-sm">
									{errors.password_confirmation[0]}
								</ValidationAlert>
							</div>
							<div>
								<div className="flex items-start">
									<CheckboxInput
										type="checkbox"
										id="terms_policy"
										className="mt-2"
									/>
									<Label
										htmlFor="terms_policy"
										className={`ml-2 block`}
									>
										By signing up you are accepting the houseace
										<HrefLink href="/terms-and-conditions">
											{" "}
											terms and conditions
										</HrefLink>{" "}
										and
										<HrefLink href="/privacy-policy">
											{" "}
											privacy policy
										</HrefLink>
									</Label>
								</div>
							</div>
							<div className="mt-6">
								<Button type="submit" disabled={false}>
									Sign Up
								</Button>
							</div>
							<div className="py-3">
								<Label>Or sign up with</Label>
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
									Have an account already? Please go to
									<HrefLink href="/auth/login"> Sign In</HrefLink>
								</p>
							</div>
						</form>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Register;
