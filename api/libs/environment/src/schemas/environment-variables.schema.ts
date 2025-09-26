import z from "zod";

export const environmentVariablesSchema = z.object({
	DATABASE_HOST: z.string().min(1),
	DATABASE_NAME: z.string().min(1),
	DATABASE_PASSWORD: z.string().min(1),
	DATABASE_USER: z.string().min(1),
	PORT: z.coerce.number().int().min(0).max(65535),
	PUSHER_APP: z.string().min(1),
	PUSHER_CLUSTER: z.string().min(1),
	PUSHER_KEY: z.string().min(1),
	PUSHER_SECRET: z.string().min(1),
});

export type EnvironmentVariables = z.infer<typeof environmentVariablesSchema>;
