import Link from 'next/link';

import Layout from '../../components/layouts/Page';
import Button from '../../components/commons/buttons/Button';
import SocialButton from '../../components/auths/SocialButton';
import TextInput from '../../components/commons/inputs/TextInput';
import CheckboxInput from '../../components/commons/inputs/CheckboxInput';
import HrefLink from '../../components/commons/buttons/HrefLink';
import Label from '../../components/commons/labels/Label';
import Logo from '../../components/auths/Logo';

const Register = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
	
		let email = e.target.elements.email?.value;
		let password = e.target.elements.password?.value;
	
		console.log(email, password);
	};
	const textColor = 'text-gray-500';

	return (
		<Layout>
			<div className='h-screen flex bg-gray-bg1 m-2'>
				<div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-10'>
					<div className="flex justify-center">
						<Link href="/">
							<a><Logo src="../logo.png" alt="Houseace"/></a>
						</Link>
					</div>
					<form onSubmit={handleFormSubmit}>
						<div>
							<Label
								htmlFor='first_name'
							>
								First Name
							</Label>
							<TextInput
								type="text"
								id="first_name"
								placeholder="First Name"
								autoFocus={true}
							/>
						</div>
						<div>
							<Label
								htmlFor='last_name'
							>
								Last Name
							</Label>
							<TextInput
								type="text"
								id="last_name"
								placeholder="Last Name"
							/>
						</div>
						<div>
							<Label
								htmlFor='email'
							>
								Email
							</Label>
							<TextInput
								type="email"
								id="email"
								placeholder="Email"
							/>
						</div>
						<div>
							<Label
								htmlFor='password'
							>
								New Password
							</Label>
							<TextInput
								type="password"
								id="password"
								placeholder="New Password"
								autoComplete="on"
							/>
						</div>
						<div>
							<Label
								htmlFor='confirm_password'
							>
								Conform Password
							</Label>
							<TextInput
								type="password"
								id="confirm_password"
								placeholder="Confirm Password"
							/>
						</div>
						<div className="grid md:grid-cols-2 grid-cols-1 gap-5">
							<div className="flex items-center">
								<CheckboxInput
									type="checkbox"
									id="remember_me"
								/>
								<Label
									htmlFor="remember_me"
									className={`ml-2 block`}
								>
									Remember me
								</Label>
							</div>
						</div>
						<div className='mt-6'>
							<Button
								type="submit"
								disabled={false}
							>
								Sign Up
							</Button>
						</div>
						<div className="py-3">
							<Label>Or sign in with</Label>
							<div className="grid md:grid-cols-2 grid-cols-1 gap-5 py-3">
								<SocialButton>
									<img src="../../images/icons/socials/google.svg" className="h-5 mr-1" alt="Google" />
									With Google
								</SocialButton>
								<SocialButton>
									<img src="../../images/icons/socials/facebook.svg" className="h-7 mr-1" alt="Google" />
									With Facebook
								</SocialButton>
							</div>
						</div>
						<div className="text-center py-3 px-3">
							<p className={textColor}>
								Still no account? Please go to <HrefLink href="/auth/register"> Sign Up</HrefLink>
							</p>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
}

export default Register;