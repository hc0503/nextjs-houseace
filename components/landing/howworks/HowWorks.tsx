const HowWorks: React.FC = (): JSX.Element => {
	return (
		<>
			<div className="flex justify-between items-center space-x-12">
				<div className="pl-28">
					<p className="text-4xl font-montserrat-bold">
						How Houseace Works
					</p>
					<p className="pt-3 text-base text-gray-light">
						Houseace is the all-in-one platform that makes home
						renovation easy
					</p>
					<div className="flex pt-24 items-center">
						<img
							src="/images/landing/icon_managed.png"
							alt="Managed"
							className="h-14 w-14"
						/>
						<div className="pl-7">
							<p className="text-2xl font-montserrat-semibold">
								Fully managed
							</p>
							<p className="pt-3 text-base text-gray-light">
								We will walk you through every step in the process,
								ensuring you never feel lost and overwhelmed.
							</p>
						</div>
					</div>
					<div className="flex pt-24 items-center">
						<img
							src="/images/landing/icon_planned.png"
							alt="Planned"
							className="h-14 w-14"
						/>
						<div className="pl-7">
							<p className="text-2xl font-montserrat-semibold">
								Meticulously planned
							</p>
							<p className="pt-3 text-base text-gray-light">{`We'll carefully devise a detailed project plan, guaranteeing the best possible results for your project.`}</p>
						</div>
					</div>
					<div className="flex pt-24 items-center">
						<img
							src="/images/landing/icon_budgeted.png"
							alt="Budgeted"
							className="h-14 w-14"
						/>
						<div className="pl-7">
							<p className="text-2xl font-montserrat-semibold">
								Accurately budgeted
							</p>
							<p className="pt-3 text-base text-gray-light">{`We'll carefully devise a detailsed project plan, guaranteeing the best possible results for your project.`}</p>
						</div>
					</div>
				</div>
				<img
					src="/images/landing/video.png"
					alt="Video"
					className="h-full"
				/>
			</div>
		</>
	);
};

export default HowWorks;
