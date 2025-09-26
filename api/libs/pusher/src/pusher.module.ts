import { Module } from "@nestjs/common";
import Pusher from "pusher";
import type { IPusherModuleOptions } from "./interfaces/pusher-module-options.interface";
import { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } from "./pusher.module-definition";
import { PUSHER_CLIENT } from "./symbols/pusher-client.symbol";

@Module({
	exports: [PUSHER_CLIENT],
	providers: [
		{
			inject: [MODULE_OPTIONS_TOKEN],
			provide: PUSHER_CLIENT,
			useFactory: ({ app, ...options }: IPusherModuleOptions) => {
				return new Pusher({ appId: app, useTLS: true, ...options });
			},
		},
	],
})
export class PusherModule extends ConfigurableModuleClass {}
