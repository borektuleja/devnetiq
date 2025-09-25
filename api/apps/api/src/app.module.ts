import { AuthModule } from "@devnetiq/auth";
import { DrizzleModule } from "@devnetiq/drizzle";
import { type EnvironmentVariables, validate } from "@devnetiq/environment";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";

@Module({
	controllers: [AppController],
	imports: [
		AuthModule,
		ConfigModule.forRoot({
			isGlobal: true,
			validate,
		}),
		DrizzleModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			isGlobal: true,
			useFactory: (
				configService: ConfigService<EnvironmentVariables, true>,
			) => {
				const database = configService.get("DATABASE_NAME", { infer: true });
				const host = configService.get("DATABASE_HOST", { infer: true });
				const password = configService.get("DATABASE_PASSWORD", {
					infer: true,
				});
				const user = configService.get("DATABASE_USER", { infer: true });

				return { database, host, password, user };
			},
		}),
	],
})
export class AppModule {}
