"use client";

import { Checkbox as RACheckbox } from "react-aria-components";

export function Checkbox({
	children,
	ref,
	...props
}: PropsWithout<typeof RACheckbox, "className">) {
	return (
		<RACheckbox ref={ref} {...props}>
			{(props) => (
				<>{children instanceof Function ? children(props) : children}</>
			)}
		</RACheckbox>
	);
}
