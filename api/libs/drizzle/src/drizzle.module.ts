import { Module } from "@nestjs/common";
import { drizzle } from "drizzle-orm/node-postgres";
import { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } from "./drizzle.module-definition";
import type { IDrizzleModuleOptions } from "./interfaces/drizzle-module-options.interface";
import { DRIZZLE_CLIENT } from "./symbols/drizzle-client.symbol";

@Module({
	exports: [DRIZZLE_CLIENT],
	providers: [
		{
			inject: [MODULE_OPTIONS_TOKEN],
			provide: DRIZZLE_CLIENT,
			useFactory: (options: IDrizzleModuleOptions) => {
				return drizzle({
					connection: { ...options },
				});
			},
		},
	],
})
export class DrizzleModule extends ConfigurableModuleClass {}
