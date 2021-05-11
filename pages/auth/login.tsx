import Link from 'next/link';
import Layout from '../../components/layouts/Page';

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
							<a className={aStyle}><img src="./../logo.png" alt="Houseace"/></a>
						</Link>
					</div>
					<form onSubmit={handleFormSubmit}>
						<div>
							<label
								htmlFor='email'
								className={labelColor}>Email</label>
							<input
								type='email'
								className="w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
								id='email'
								placeholder='Your Email'
							/>
						</div>
						<div>
							<label
								htmlFor='password'
								className={labelColor}
							>
								Password
							</label>
							<input
								type='password'
								className="w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
								id='password'
								placeholder='Your Password'
							/>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember_me"
									type="checkbox"
									className="h-4 w-4 text-red-400 rounded checked:bg-red-400 checked:border-transparent"
								/>
								<label
									htmlFor="remember_me"
									className={`ml-2 block ${labelColor}`}
								>
									Remember me
								</label>
							</div>
							<div>
								<Link href="/auth/forgot-password"><a href="#"className={aStyle}>Forgot your password?</a></Link>
							</div>
						</div>
						<div className='flex justify-center items-center mt-6'>
							<button
								type="submit"
								className="bg-red-400 px-3 py-3 text-white w-full text-lg font-medium hover:bg-red-500"
								
							>
								Sign In
							</button>
						</div>
						<div className="text-center py-3 px-3">
							<p className={labelColor}>
								Still no account? Please go to <Link href="/auth/register"><a className={aStyle}> Sign Up</a></Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
}

export default Login;