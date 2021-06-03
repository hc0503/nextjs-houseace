import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGooglePlus, FaFacebook } from "react-icons/fa";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import axios from "@/lib/axios";
import SocialButton from "./SocialButton";
import AuthInputGroup from "./AuthInputGroup";
import ArrowCircleButton from "./ArrowCircleButton";
import AuthTitle from "./AuthTitle";
import AuthSelectGroup from "./AuthSelectGroup";

interface IErrors {
	role: string[];
	name: string[];
	email: string[];
	password: string[];
	password_confirmation: string[];
}
const RegisterForm: React.FC = (): JSX.Element => {
	useEffect(() => {
		getRoles();
	}, []);
	const [roles, setRoles] = useState([]);
	const router = useRouter();
	const [role, setRole] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password_confirmation, setPassword_confirmation] =
		useState("");
	const [errors, setErrors] = useState({
		role: [""],
		name: [""],
		email: [""],
		password: [""],
		password_confirmation: [""],
	} as IErrors);
	const [isValied, setIsValied] = useState(false);
	const getRoles = async () => {
		const res = await axios.get("/api/roles");
		setRoles(res.data.data);
	};
	const handleFormSubmit = async (
		e: React.SyntheticEvent
	): Promise<void> => {
		e.preventDefault();
		try {
			const res = await axios.post("/api/auth/register", {
				role,
				name,
				email,
				password,
				password_confirmation,
			});
			if (res.status === 201) {
				router.push("/app");
			}
		} catch (error) {
			setErrors({
				role: error.response.data.errors.role ?? [""],
				name: error.response.data.errors.name ?? [""],
				email: error.response.data.errors.email ?? [""],
				password: error.response.data.errors.password ?? [""],
				password_confirmation: error.response.data.errors
					.password_confirmation ?? [""],
			});
		}
	};
	const handleSocialRegisterSuccess = async (
		user: any
	): Promise<void> => {
		try {
			const res = await axios.post("/api/auth/register", {
				role: role,
				name: user._profile.firstName + " " + user._profile.lastName,
				email: user._profile.email,
				password: password,
				password_confirmation: password_confirmation,
				provider_type: user._provider.toUpperCase(),
			});
			if (res.status === 201) {
				router.push("/app");
			}
		} catch (error) {
			setErrors({
				role: error.response.data.errors.role ?? [""],
				name: error.response.data.errors.name ?? [""],
				email: error.response.data.errors.email ?? [""],
				password: error.response.data.errors.password ?? [""],
				password_confirmation: error.response.data.errors
					.password_confirmation ?? [""],
			});
		}
	};
	const handleSocialRegisterFailure = async (
		error: any
	): Promise<void> => {
		console.log(error);
	};
	return (
		<>
			<div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 text-white">
				<div className="mx-auto w-full max-w-sm lg:w-96">
					<AuthTitle />
					<div className="mt-10">
						<form onSubmit={handleFormSubmit} className="space-y-2">
							<AuthSelectGroup
								name="role"
								options={roles}
								defaultValue={0}
								description="Choose your profile..."
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => {
									setRole(e.target.value);
									setErrors({
										role: [""],
										name: errors?.name,
										email: errors?.email,
										password: errors?.password,
										password_confirmation:
											errors?.password_confirmation,
									});
								}}
								errorMessage={errors?.role[0]}
							/>
							<AuthInputGroup
								id="name"
								name="name"
								label="Full Name"
								placeholder="Full Name"
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => {
									setName(e.target.value);
									setErrors({
										role: errors?.role,
										name: [""],
										email: errors?.email,
										password: errors?.password,
										password_confirmation:
											errors?.password_confirmation,
									});
								}}
								errorMessage={errors?.name[0]}
							>
								<FiUser className="h-5 w-5" aria-hidden="true" />
							</AuthInputGroup>
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
										role: errors?.role,
										name: errors?.name,
										email: [""],
										password: errors?.password,
										password_confirmation:
											errors?.password_confirmation,
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
										role: errors?.role,
										name: errors?.name,
										email: errors?.email,
										password: [""],
										password_confirmation:
											errors?.password_confirmation,
									});
								}}
								errorMessage={errors?.password[0]}
							>
								<FiLock className="h-5 w-5" aria-hidden="true" />
							</AuthInputGroup>
							<AuthInputGroup
								id="password_confirmation"
								name="password_confirmation"
								type="password"
								label="Confirm Password"
								placeholder="Confirm Password"
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => {
									setPassword_confirmation(e.target.value);
									setErrors({
										role: errors?.role,
										name: errors?.name,
										email: errors?.email,
										password: errors?.password,
										password_confirmation: [""],
									});
								}}
								errorMessage={errors?.password_confirmation[0]}
							>
								<FiLock className="h-5 w-5" aria-hidden="true" />
							</AuthInputGroup>
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="terms"
										name="terms"
										type="checkbox"
										className="focus:ring-red-moredark h-4 w-4 text-red-moredark border-gray-300 rounded"
										onChange={(e) => {
											setIsValied(e.target.checked);
										}}
									/>
									<label
										htmlFor="terms"
										className="pt-4 ml-2 block text-sm"
									>
										By signing up you are accepting the houseace terms
										and conditions and privacy policy
									</label>
								</div>
							</div>
							<div className="text-right">
								<ArrowCircleButton type="submit" disabled={!isValied}>
									Register
								</ArrowCircleButton>
							</div>
						</form>
					</div>
					<div className="mt-6">
						<div className="mt-1 space-y-2">
							<SocialButton
								provider="google"
								appId={process.env.GOOGLE_ID}
								onLoginSuccess={handleSocialRegisterSuccess}
								onLoginFailure={handleSocialRegisterFailure}
							>
								<FaFacebook size="23" className="mr-1" />
								Register with Facebook
							</SocialButton>
							<SocialButton
								provider="google"
								appId={process.env.GOOGLE_ID}
								onLoginSuccess={handleSocialRegisterSuccess}
								onLoginFailure={handleSocialRegisterFailure}
							>
								<FaGooglePlus size="23" className="mr-1" />
								Register with Google
							</SocialButton>
						</div>
					</div>
					<div className="text-center py-3 px-3 mt-20">
						<p className="text-sm">
							Have an account already? Please go to
							<Link href="/auth/login">
								<a className="font-montserrat-bold hover:text-red-moredark">
									{" "}
									Sign In
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
export default RegisterForm;
