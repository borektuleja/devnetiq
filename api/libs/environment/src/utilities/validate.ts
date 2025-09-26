import z, { ZodError } from "zod";
import { type EnvironmentVariables, environmentVariablesSchema } from "../schemas/environment-variables.schema";

export function validate(environment: Record<string, unknown>): EnvironmentVariables {
	try {
		return environmentVariablesSchema.parse(environment);
	} catch (error) {
		if (error instanceof ZodError) {
			throw new Error(z.prettifyError(error));
		}

		throw error;
	}
}
