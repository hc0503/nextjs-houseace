import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
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
	const navIconSize = "h-7"; // 30px
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
									rounded-lg
									hover:bg-red-lesslight hover:text-red hover:font-semibold
									focus:outline-none`,
									{ "font-semibold bg-red-lesslight text-red": open }
								)}
							>
								<div className="flex items-center">
									<item.icon
										className={classNames(
											{ "text-red": selected },
											`mr-3`,
											navIconSize
										)}
										aria-hidden="true"
									/>
									{item.name}
								</div>
								<ChevronRightIcon
									className={classNames(
										{ "transform rotate-90": open },
										`w-5 h-5`
									)}
								/>
							</Disclosure.Button>
							<div className="space-y-1">
								{item.sub.map((sub: any, key: number) => (
									<Disclosure.Panel
										key={`DisclosusrePanel-${key}`}
										className={classNames(
											`pl-4
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
								"bg-red-lesslight text-red font-medium": selected,
							},
							`flex justify-between
							items-center
							px-2 py-2
							text-sm font-normal
							rounded-md
							hover:bg-red-lesslight hover:text-red`,
							navHeight,
							navFontSetting
						)}
					>
						<div className="flex items-center">
							<item.icon
								className={classNames(
									{ "text-red": selected },
									`mr-3 h-7`
								)}
								aria-hidden="true"
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
