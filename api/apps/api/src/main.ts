import type { EnvironmentVariables } from "@devnetiq/environment";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	const configService = app.get(ConfigService<EnvironmentVariables, true>);
	const port = configService.get("PORT", { infer: true });

	const document = new DocumentBuilder().setDescription("Devnetiq API").setTitle("Devnetiq").setVersion("1.0").build();
	const documentFactory = () => SwaggerModule.createDocument(app, document, {});

	SwaggerModule.setup("swagger", app, documentFactory, {
		jsonDocumentUrl: "swagger/json",
		swaggerOptions: {
			persistAuthorization: true,
		},
		yamlDocumentUrl: "swagger/yaml",
	});

	await app.listen(port);
}

bootstrap();
