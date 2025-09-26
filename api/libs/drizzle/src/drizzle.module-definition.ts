import { ConfigurableModuleBuilder } from "@nestjs/common";
import type { IDrizzleModuleOptions } from "./interfaces/drizzle-module-options.interface";

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } = new ConfigurableModuleBuilder<IDrizzleModuleOptions>()
	.setExtras(
		{
			isGlobal: true,
		},
		(definition, extras) => ({
			...definition,
			global: extras.isGlobal,
		}),
	)
	.build();
