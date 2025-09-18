import { DRIZZLE_CLIENT } from "@devnetiq/drizzle";
import { users } from "@devnetiq/schemas";
import { Controller, Get, Inject } from "@nestjs/common";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";

@Controller()
export class AppController {
	public constructor(
		@Inject(DRIZZLE_CLIENT)
		private readonly db: NodePgDatabase,
	) {}

	@Get()
	public async get(): Promise<string[]> {
		const rows = await this.db.select({ id: users.id }).from(users);

		return rows.map(({ id }) => id);
	}
}
