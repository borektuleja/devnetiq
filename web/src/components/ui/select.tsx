"use client";

import { cva } from "class-variance-authority";
import {
	Button as RAButton,
	FieldError as RAFieldError,
	Label as RALabel,
	ListBox as RAListBox,
	ListBoxItem as RAListBoxItem,
	Popover as RAPopover,
	Select as RASelect,
	SelectValue as RASelectValue,
	Text as RAText,
} from "react-aria-components";

const selectClasses = cva(["flex", "flex-col", "gap-2"]);

const selectLabelClasses = cva(["text-white", "text-sm/6", "font-medium"]);

const selectTriggerClasses = cva([
	"px-3",
	"py-1.5",
	"border",
	"border-white/10",
	"rounded-md",
	"outline-none",
	"outline-2",
	"outline-offset-2",
	"outline-blue-500",
	"flex",
	"items-center",
	"gap-3",
	"text-white",
	"bg-white/5",
	"text-base",
	"sm:text-sm/6",
	"font-normal",
	"transition-colors",
	"duration-200",
	"cursor-pointer",
	"data-focus-visible:outline-solid",
	"data-disabled:border-white/5",
	"data-disabled:text-gray-500",
	"data-disabled:bg-white/10",
	"data-disabled:cursor-not-allowed",
]);

const selectValueClasses = cva(["data-placeholder:text-gray-500"]);

const selectContentClasses = cva(["border", "border-white/10", "rounded-md", "bg-gray-800"]);

const selectItemClasses = cva([
	"px-3",
	"py-1.5",
	"rounded-md",
	"outline-none",
	"outline-2",
	"outline-offset-0",
	"outline-blue-500",
	"text-white",
	"text-sm/6",
	"font-normal",
	"cursor-pointer",
	"data-focus-visible:outline-solid",
	"data-selected:font-semibold",
]);

const selectDescriptionClasses = cva(["text-gray-400", "text-sm/6", "font-normal"]);

const selectErrorClasses = cva(["text-red-400", "text-sm/6", "font-normal"]);

export function Select({ ref, ...props }: PropsWithout<typeof RASelect, "className">) {
	return <RASelect className={selectClasses()} ref={ref} {...props} />;
}

export function SelectLabel({ ref, ...props }: PropsWithout<typeof RALabel, "className">) {
	return <RALabel className={selectLabelClasses()} ref={ref} {...props} />;
}

export function SelectTrigger({ ref, ...props }: PropsWithout<typeof RAButton, "children" | "className">) {
	return (
		<RAButton className={selectTriggerClasses()} ref={ref} {...props}>
			<RASelectValue className={selectValueClasses()} />
		</RAButton>
	);
}

export function SelectContent({ ref, ...props }: PropsWithout<typeof RAListBox, "className">) {
	return (
		<RAPopover
			className="w-(--trigger-width)"
			containerPadding={0}
			crossOffset={0}
			offset={4}
			placement="bottom"
			shouldFlip={false}
		>
			<RAListBox className={selectContentClasses()} ref={ref} {...props} />
		</RAPopover>
	);
}

export function SelectItem({ ref, ...props }: PropsWithout<typeof RAListBoxItem, "className">) {
	return <RAListBoxItem className={selectItemClasses()} ref={ref} {...props} />;
}

export function SelectDescription({ ref, ...props }: PropsWithout<typeof RAText, "className" | "slot">) {
	return <RAText className={selectDescriptionClasses()} ref={ref} slot="description" {...props} />;
}

export function SelectError({ ref, ...props }: PropsWithout<typeof RAFieldError, "className">) {
	return <RAFieldError className={selectErrorClasses()} ref={ref} {...props} />;
}
