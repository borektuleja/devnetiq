import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class MessageEventDto {
	@ApiProperty({ type: String })
	@Expose()
	public content: string;
}
