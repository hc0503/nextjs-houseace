import ReactPlayer from "react-player";

const HowItWorks: React.FC = (): JSX.Element => {
	return (
		<>
			<div className="md:flex justify-items-center items-center">
				<div className="md:w-2/5 md:pr-20 w-full pr-0">
					<p className="text-4xl font-montserrat-bold">
						How Houseace Works
					</p>
					<p className="pt-3 text-base text-gray-light">
						Houseace is the all-in-one platform that makes home
						renovation easy
					</p>
					<div className="flex lg:pt-24 pt-10 items-center">
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
					<div className="flex lg:pt-24 pt-10 items-center">
						<img
							src="/images/landing/icon_planned.png"
							alt="Planned"
							className="h-14 w-14"
						/>
						<div className="pl-7">
							<p className="text-2xl font-montserrat-semibold">
								Meticulously planned
							</p>
							<p className="pt-3 text-base text-gray-light">
								{`
								We'll carefully devise a detailed project plan,
								guaranteeing the best possible results for your project.`}
							</p>
						</div>
					</div>
					<div className="flex lg:pt-24 pt-10 items-center">
						<img
							src="/images/landing/icon_budgeted.png"
							alt="Budgeted"
							className="h-14 w-14"
						/>
						<div className="pl-7">
							<p className="text-2xl font-montserrat-semibold">
								Accurately budgeted
							</p>
							<p className="pt-3 text-base text-gray-light">
								{`
								We'll carefully devise a detailsed project plan,
								guaranteeing the best possible results for your project.`}
							</p>
						</div>
					</div>
				</div>
				<div className="md:pt-0 pt-10 md:w-3/5 w-full h-auto">
					<ReactPlayer
						url="https://www.houseace.com.au/wp-content/uploads/2021/05/4162.-designnz.mp4"
						light="/images/landing/video.png"
						className="react-player"
						playing
						width="100%"
						height="680px"
						controls={true}
						playIcon={
							<button className="hover:text-red">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="198"
									height="198"
									viewBox="0 0 198 198"
								>
									<g
										id="Group_632"
										data-name="Group 632"
										transform="translate(-1156 -2215)"
									>
										<circle
											id="Ellipse_70"
											data-name="Ellipse 70"
											cx="99"
											cy="99"
											r="99"
											transform="translate(1156 2215)"
											fill="rgba(0,0,0,0.2)"
										/>
										<g
											id="Icon_feather-play-circle"
											data-name="Icon feather-play-circle"
											transform="translate(1188 2247)"
										>
											<path
												id="Path_307"
												data-name="Path 307"
												d="M130.758,66.879A63.879,63.879,0,1,1,66.879,3,63.879,63.879,0,0,1,130.758,66.879Z"
												fill="none"
												stroke="#fff"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="6"
											/>
											<path
												id="Path_308"
												data-name="Path 308"
												d="M15,12,56.624,39.749,15,67.5Z"
												transform="translate(37.219 27.13)"
												fill="none"
												stroke="#fff"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="6"
											/>
										</g>
									</g>
								</svg>
							</button>
						}
					/>
				</div>
				{/* <img
					src="/images/landing/video.png"
					alt="Video"
					className="md:pt-0 pt-10 md:w-3/5 w-full h-auto"
				/> */}
			</div>
		</>
	);
};

export default HowItWorks;
