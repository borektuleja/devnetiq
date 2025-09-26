import { ConfigurableModuleBuilder } from "@nestjs/common";
import type { IPusherModuleOptions } from "./interfaces/pusher-module-options.interface";

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } = new ConfigurableModuleBuilder<IPusherModuleOptions>()
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
