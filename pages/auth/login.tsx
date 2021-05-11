import Link from 'next/link';

import Layout from '../../components/layouts/Page';
import Button from '../../components/commons/buttons/Button';
import TextInput from '../../components/commons/inputs/TextInput';
import CheckboxInput from '../../components/commons/inputs/CheckboxInput';
import HrefLink from '../../components/commons/buttons/HrefLink';

const Login = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
	
		let email = e.target.elements.email?.value;
		let password = e.target.elements.password?.value;
	
		console.log(email, password);
	};
	const labelColor: string = 'text-gray-500';
	const aStyle: string = 'font-medium text-red-400 hover:text-red-300';

	return (
		<Layout>
			<div className='h-screen flex bg-gray-bg1'>
				<div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-10'>
					<div className="text-center">
						<Link href="/">
							<a className={aStyle}><img src="../logo.png" alt="Houseace"/></a>
						</Link>
					</div>
					<form onSubmit={handleFormSubmit}>
						<div>
							<label
								htmlFor='email'
								className={labelColor}>Email</label>
							<TextInput
								type="email"
								id="email"
								placeholder="Your Email"
							/>
						</div>
						<div>
							<label
								htmlFor='password'
								className={labelColor}
							>
								Password
							</label>
							<TextInput
								type="password"
								id="password"
								placeholder="Your Password"
							/>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<CheckboxInput
									type="checkbox"
									id="remember_me"
								/>
								<label
									htmlFor="remember_me"
									className={`ml-2 block ${labelColor}`}
								>
									Remember me
								</label>
							</div>
							<div>
								<HrefLink href="/auth/forgot-password">Forgot your password?</HrefLink>
							</div>
						</div>
						<div className='flex justify-center items-center mt-6'>
							<Button
								type="submit"
								disabled={false}
							>
								Sign In
							</Button>
						</div>
						<div className="text-center py-3 px-3">
							<p className={labelColor}>
								Still no account? Please go to <HrefLink href="/auth/register"> Sign Up</HrefLink>
							</p>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
}

export default Login;