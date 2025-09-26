import { DRIZZLE_CLIENT } from "@devnetiq/drizzle";
import { PUSHER_CLIENT } from "@devnetiq/pusher";
import { Controller, Get, Inject } from "@nestjs/common";
import { ApiExtraModels } from "@nestjs/swagger";
import { plainToInstance } from "class-transformer";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type Pusher from "pusher";
import { MessageEventDto } from "./dtos/message-event.dto";
import { ChannelEnum } from "./enums/channel.enum";
import { EventEnum } from "./enums/event.enum";

@ApiExtraModels(MessageEventDto)
@Controller()
export class AppController {
	public constructor(
		@Inject(DRIZZLE_CLIENT)
		private readonly db: NodePgDatabase,
		@Inject(PUSHER_CLIENT)
		private readonly pusher: Pusher,
	) {}

	@Get()
	public async get(): Promise<string> {
		const message = plainToInstance(MessageEventDto, {
			content: "This is a content of a message.",
		} satisfies MessageEventDto);

		await this.pusher.trigger(ChannelEnum.GENERAL, EventEnum.MESSAGE, message);

		return "The Pusher has been activated.";
	}
}
