import { Controller, Get } from "@nestjs/common";
// biome-ignore lint/style/useImportType: Injection
import { AuthService } from "@/auth";

@Controller()
export class AppController {
	public constructor(private readonly authService: AuthService) {}

	@Get()
	public get(): string {
		return "Hello, DevnetiQ!";
	}
}
