import { DrizzleModule } from "@devnetiq/drizzle";
import { type EnvironmentVariables, validate } from "@devnetiq/environment";
import { PusherModule } from "@devnetiq/pusher";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";

@Module({
	controllers: [AppController],
	imports: [
		ConfigModule.forRoot({ isGlobal: true, validate }),
		DrizzleModule.registerAsync({
			inject: [ConfigService],
			isGlobal: true,
			useFactory: (configService: ConfigService<EnvironmentVariables, true>) => ({
				database: configService.get("DATABASE_NAME", { infer: true }),
				host: configService.get("DATABASE_HOST", { infer: true }),
				password: configService.get("DATABASE_PASSWORD", { infer: true }),
				user: configService.get("DATABASE_USER", { infer: true }),
			}),
		}),
		PusherModule.registerAsync({
			inject: [ConfigService],
			isGlobal: true,
			useFactory: (configService: ConfigService<EnvironmentVariables, true>) => ({
				app: configService.get("PUSHER_APP", { infer: true }),
				cluster: configService.get("PUSHER_CLUSTER", { infer: true }),
				key: configService.get("PUSHER_KEY", { infer: true }),
				secret: configService.get("PUSHER_SECRET", { infer: true }),
			}),
		}),
	],
})
export class AppModule {}
