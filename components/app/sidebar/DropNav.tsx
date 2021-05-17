import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import classNames from "classnames";

interface Props {
	className?: string;
	item: any;
}
const DropNav: React.FC<Props> = ({
	className = "",
	item,
}): JSX.Element => {
	const selected = false;
	const navHeight = "h-16"; // 64px
	const subNavHeight = "h-12"; // 48px
	const navFontSetting = "text-base"; // 16px
	const subNavFontSetting = "text-sm font-normal"; // 14px
	const navIconSize = "h-6"; // h-7:30px h-6:24px
	return (
		<>
			{item.sub.length > 0 && (
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button
								className={classNames(
									navHeight,
									navFontSetting,
									className,
									`w-full
									flex justify-between
									items-center
									px-2 py-2
									border-l-8
									border-white
									rounded-lg
									hover:bg-red-lesslight hover:text-red hover:font-semibold hover:border-red
									focus:outline-none`,
									{
										"font-semibold bg-red-lesslight text-red border-red":
											open,
									}
								)}
							>
								<div className="flex items-center py-2">
									<item.icon
										className={classNames(
											"fill-current mr-3",
											navIconSize
										)}
									/>
									{item.name}
								</div>
								<ChevronUpIcon
									className={classNames(
										{ "transform rotate-180": open },
										`w-5 h-5`
									)}
								/>
							</Disclosure.Button>
							<div className="space-y-1">
								{item.sub.map((sub: any, key: number) => (
									<Disclosure.Panel
										key={`DisclosusrePanel-${key}`}
										className={classNames(
											`pl-8
											hover:text-red
											rounded-lg`,
											subNavHeight,
											subNavFontSetting
										)}
									>
										<a
											href={sub.href}
											className={classNames(`flex p-2`)}
										>
											{sub.name}
										</a>
									</Disclosure.Panel>
								))}
							</div>
						</>
					)}
				</Disclosure>
			)}

			{/* If the nav doesn't have sub nav */}
			{item.sub.length < 1 && (
				<Link href={item.href}>
					<a
						key={item.name}
						href={item.href}
						className={classNames(
							{
								"bg-red-lesslight text-red font-medium border-red":
									selected,
							},
							`flex justify-between
							items-center
							px-2 py-2
							text-sm font-normal
							border-l-8
							border-white
							rounded-lg
							hover:bg-red-lesslight hover:text-red hover:border-red`,
							navHeight,
							navFontSetting
						)}
					>
						<div className="flex items-center">
							<item.icon
								className={classNames(
									"fill-current mr-3",
									navIconSize
								)}
							/>
							{item.name}
						</div>
					</a>
				</Link>
			)}
		</>
	);
};

export default DropNav;
