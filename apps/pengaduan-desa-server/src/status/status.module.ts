import { Module } from "@nestjs/common";
import { StatusModuleBase } from "./base/status.module.base";
import { StatusService } from "./status.service";
import { StatusController } from "./status.controller";
import { StatusResolver } from "./status.resolver";

@Module({
  imports: [StatusModuleBase],
  controllers: [StatusController],
  providers: [StatusService, StatusResolver],
  exports: [StatusService],
})
export class StatusModule {}
