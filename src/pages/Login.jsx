import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [password, setPassword] = useState('');
	const { user, logIn } = UserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		try {
			await logIn(email, password);
			navigate('/');
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	return (
		<div>
			<div className="w-full h-screen">
				<img
					className="hidden sm:block absolute w-full h-full object-cover"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/3e35f791-04e3-4db3-b963-f69e0e1d6af6/AR-es-20220919-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="/"
				/>

				<div className="bg-black/70 fixed top-0 left-0 w-full h-screen"></div>
				<div className="fixed w-full px-4 py-24 z-50">
					<div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
						<div className="max-w-[320px] mx-auto py-16 ">
							<h1 className="text-3xl font-bold">Sign In</h1>
							{error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
							<form
								onSubmit={handleSubmit}
								className="w-full flex flex-col py-4"
							>
								<input
									onChange={(e) => setEmail(e.target.value)}
									className="p-3 my-2 bg-gray-700 rounded"
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									autoComplete="email"
								/>
								<input
									onChange={(e) => setPassword(e.target.value)}
									className="p-3 my-2 bg-gray-700 rounded"
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									autoComplete="current-password"
								/>
								<button className="bg-red-600 py-3 my-6 rounded font-bold">
									Sign In
								</button>
								<div className="flex justify-between items-center text-sm text-gray-600">
									<p>
										<input className="mr-2" type="checkbox" /> Remember me
									</p>
									<p> Need help?</p>
								</div>
								<p className="py-8">
									<span className="text-gray-600">New to Netflix?</span>{' '}
									<Link to="/signup">Sign Up</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
