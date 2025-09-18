import { validate } from "@devnetiq/environment";
import { defineConfig } from "drizzle-kit";

const environmentVariables = validate(process.env);

export default defineConfig({
	dbCredentials: {
		database: environmentVariables.DATABASE_NAME,
		host: environmentVariables.DATABASE_HOST,
		password: environmentVariables.DATABASE_PASSWORD,
		ssl: false,
		user: environmentVariables.DATABASE_USER,
	},
	dialect: "postgresql",
	schema: "./libs/schemas/src/index.ts",
});
