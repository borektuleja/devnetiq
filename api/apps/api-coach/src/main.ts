import type { EnvironmentVariables } from "@devnetiq/environment";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	const configService = app.get(ConfigService<EnvironmentVariables, true>);
	const port = configService.get("PORT_API_COACH", { infer: true });

	await app.listen(port);
}

bootstrap();
