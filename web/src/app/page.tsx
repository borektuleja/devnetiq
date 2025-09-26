"use client";

import { useState } from "react";
import {
	TextField,
	TextFieldDescription,
	TextFieldError,
	TextFieldInput,
	TextFieldLabel,
} from "@/components/ui/text-field";
import useChannel from "@/hooks/use-channel";
import useEvent from "@/hooks/use-event";

export default function Page() {
	const channel = useChannel("general");
	const [numbers, setNumbers] = useState<number[]>([]);

	useEvent<{ number: number }>(channel, "random", (data) => {
		setNumbers((numbers) => [data.number, ...numbers]);
	});

	return (
		<section className="p-16">
			<h1>Page</h1>
			<form className="flex flex-col gap-8">
				<TextField>
					<TextFieldLabel>E-mailová adresa</TextFieldLabel>
					<TextFieldInput placeholder="Zadejte e-mailovou adresu" />
					<TextFieldDescription>Na tuto adresu Vám bude zaslán potvrzovací e-mail.</TextFieldDescription>
					<TextFieldError />
				</TextField>
				<TextField>
					<TextFieldLabel>Jméno a příjmení</TextFieldLabel>
					<TextFieldInput placeholder="Zadejte jméno a příjmení" />
					<TextFieldError />
				</TextField>
			</form>
		</section>
	);
}
