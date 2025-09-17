import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
	public callMe(): void {
		console.log("called");
	}
}
