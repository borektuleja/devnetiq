import z from "zod";

export const environmentVariablesSchema = z.object({
	DATABASE_HOST: z.string().min(1),
	DATABASE_NAME: z.string().min(1),
	DATABASE_PASSWORD: z.string().min(1),
	DATABASE_USER: z.string().min(1),
	PORT_API_CLIENT: z.coerce.number().int().min(0).max(65535),
	PORT_API_COACH: z.coerce.number().int().min(0).max(65535),
});

export type EnvironmentVariables = z.infer<typeof environmentVariablesSchema>;
