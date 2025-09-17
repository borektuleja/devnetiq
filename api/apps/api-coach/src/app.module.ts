import { Module } from "@nestjs/common";
import { AuthModule } from "@/auth";
import { AppController } from "./app.controller";

@Module({
	controllers: [AppController],
	imports: [AuthModule],
})
export class AppModule {}
