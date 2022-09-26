import React from 'react';
import SavedShows from '../components/SavedShows';

const Account = () => {
	return (
		<div>
			<div className="w-full  text-white">
				<img
					className="w-[100%] h-[450px] object-cover"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/3e35f791-04e3-4db3-b963-f69e0e1d6af6/AR-es-20220919-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="/"
				/>
				<div className="bg-black/60 fixed top-0 left-0 w-full h-[250px]">
					<div className="absolute top-[30%] p-4 md:p-8">
						<h1 className="text-3xl md:text-5xl font-bold">My shows</h1>
					</div>
				</div>
			</div>
			<SavedShows />
		</div>
	);
};

export default Account;
