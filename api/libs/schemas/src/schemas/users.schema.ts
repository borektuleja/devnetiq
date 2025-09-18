import type { InferSelectModel } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { UserConstraintsEnum } from "../enums/user-constraints.enum";

export const users = pgTable(
	"users",
	{
		id: uuid().notNull().defaultRandom(),
	},
	(self) => [
		primaryKey({
			columns: [self.id],
			name: UserConstraintsEnum.PK_USER,
		}),
	],
);

export type User = InferSelectModel<typeof users>;
