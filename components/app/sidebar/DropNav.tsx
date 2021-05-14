import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const DropNav = (props: iNavProps) => {
	const { className = "", item } = props;
	const selected = false;

	return (
		<>
			{item.sub.length > 0 && (
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button
								className={`
								w-full
								flex
								justify-between
								items-center
								px-2 py-2
								font-medium
								${open ? "bg-red-lesslight text-red" : ""}
								rounded-lg
								hover:bg-red-lesslight
								hover:text-red
								focus:outline-none
								${className}
							`}
							>
								<div className="flex items-center">
									<item.icon
										className={classNames(selected ? "text-red" : "", "mr-3 h-6 w-6")}
										aria-hidden="true"
									/>
									{item.name}
								</div>
								<ChevronRightIcon
									className={`
								${open ? "transform rotate-90" : ""}
								w-5 h-5
							`}
								/>
							</Disclosure.Button>
							<div className="space-y-1">
								{item.sub.map((sub) => (
									<Disclosure.Panel
										className={`
										pl-4
										hover:text-red
										rounded-lg
									`}
									>
										<a
											href={sub.href}
											className={`
											flex
											p-2
										`}
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
							selected ? "bg-red-lesslight text-red" : "hover:bg-red-lesslight hover:text-red",
							"group flex justify-between items-center px-2 py-2 text-sm font-medium rounded-md"
						)}
					>
						<div className="flex items-center">
							<item.icon
								className={classNames(selected ? "text-red" : "", "mr-3 h-6 w-6")}
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
