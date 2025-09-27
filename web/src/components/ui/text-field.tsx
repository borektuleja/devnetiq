"use client";

import { cva } from "class-variance-authority";
import {
	FieldError as RAFieldError,
	Input as RAInput,
	Label as RALabel,
	Text as RAText,
	TextField as RATextField,
} from "react-aria-components";

const textFieldClasses = cva(["flex", "flex-col", "gap-2"]);

const textFieldLabelClasses = cva(["text-white", "text-sm/6", "font-medium"]);

const textFieldInputClasses = cva([
	"px-3",
	"py-1.5",
	"border",
	"border-white/10",
	"rounded-md",
	"outline-none",
	"outline-2",
	"outline-offset-2",
	"outline-blue-500",
	"text-white",
	"bg-white/5",
	"text-base",
	"sm:text-sm/6",
	"font-normal",
	"transition-colors",
	"duration-200",
	"data-focus-visible:outline-solid",
	"data-disabled:border-white/5",
	"data-disabled:text-gray-500",
	"data-disabled:bg-white/10",
	"data-disabled:cursor-not-allowed",
	"placeholder:text-gray-500",
]);

const textFieldDescriptionClasses = cva(["text-gray-400", "text-sm/6", "font-normal"]);

const textFieldErrorClasses = cva(["text-red-400", "text-sm/6", "font-normal"]);

export function TextField({ ref, ...props }: PropsWithout<typeof RATextField, "className">) {
	return <RATextField className={textFieldClasses()} ref={ref} {...props} />;
}

export function TextFieldLabel({ ref, ...props }: PropsWithout<typeof RALabel, "className">) {
	return <RALabel className={textFieldLabelClasses()} ref={ref} {...props} />;
}

export function TextFieldInput({ ref, ...props }: PropsWithout<typeof RAInput, "children" | "className">) {
	return <RAInput className={textFieldInputClasses()} ref={ref} {...props} />;
}

export function TextFieldDescription({ ref, ...props }: PropsWithout<typeof RAText, "className" | "slot">) {
	return <RAText className={textFieldDescriptionClasses()} ref={ref} slot="description" {...props} />;
}

export function TextFieldError({ ref, ...props }: PropsWithout<typeof RAFieldError, "className">) {
	return <RAFieldError className={textFieldErrorClasses()} ref={ref} {...props} />;
}
