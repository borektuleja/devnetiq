"use client";

import { cva } from "class-variance-authority";
import { Button as RAButton, ProgressBar as RAProgressBar } from "react-aria-components";
import type { IconType } from "react-icons";
import { LuLoaderCircle } from "react-icons/lu";

const buttonClasses = cva([
	"px-3",
	"py-2",
	"rounded-md",
	"outline-none",
	"outline-2",
	"outline-offset-2",
	"outline-blue-500",
	"flex",
	"justify-center",
	"items-center",
	"gap-1.5",
	"text-white",
	"bg-indigo-500",
	"text-base",
	"sm:text-sm/6",
	"font-semibold",
	"transition-colors",
	"duration-200",
	"cursor-pointer",
	"data-hovered:bg-indigo-400",
	"data-focus-visible:outline-solid",
	"data-disabled:opacity-50",
	"data-disabled:cursor-not-allowed",
	"data-pending:opacity-50",
	"data-pending:cursor-wait",
]);

export function Button({
	children,
	icon: Icon,
	ref,
	...props
}: PropsWithout<typeof RAButton, "className"> & { icon?: IconType }) {
	return (
		<RAButton className={buttonClasses()} ref={ref} {...props}>
			{(props) => (
				<>
					{props.isPending === true ? (
						<RAProgressBar aria-label="Zpracovávám" isIndeterminate={true}>
							<LuLoaderCircle aria-hidden={true} className="animate-spin" size={16} />
						</RAProgressBar>
					) : null}
					{props.isPending === false && Icon !== undefined ? <Icon aria-hidden={true} size={16} /> : null}
					{typeof children === "function" ? children(props) : children}
				</>
			)}
		</RAButton>
	);
}
