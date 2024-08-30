import { Module } from "@nestjs/common";
import { ResponseModuleBase } from "./base/response.module.base";
import { ResponseService } from "./response.service";
import { ResponseController } from "./response.controller";
import { ResponseResolver } from "./response.resolver";

@Module({
  imports: [ResponseModuleBase],
  controllers: [ResponseController],
  providers: [ResponseService, ResponseResolver],
  exports: [ResponseService],
})
export class ResponseModule {}
