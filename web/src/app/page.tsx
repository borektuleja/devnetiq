import {
	TextField,
	TextFieldDescription,
	TextFieldError,
	TextFieldInput,
	TextFieldLabel,
} from "@/components/ui/text-field";

export default function Page() {
	return (
		<section className="p-16">
			<h1>Page</h1>
			<form className="flex flex-col gap-8">
				<TextField>
					<TextFieldLabel>E-mailová adresa</TextFieldLabel>
					<TextFieldInput placeholder="Zadejte e-mailovou adresu" />
					<TextFieldDescription>
						Na tuto adresu Vám bude zaslán potvrzovací e-mail.
					</TextFieldDescription>
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
