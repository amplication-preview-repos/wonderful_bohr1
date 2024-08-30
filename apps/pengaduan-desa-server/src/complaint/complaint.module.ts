import { Module } from "@nestjs/common";
import { ComplaintModuleBase } from "./base/complaint.module.base";
import { ComplaintService } from "./complaint.service";
import { ComplaintController } from "./complaint.controller";
import { ComplaintResolver } from "./complaint.resolver";

@Module({
  imports: [ComplaintModuleBase],
  controllers: [ComplaintController],
  providers: [ComplaintService, ComplaintResolver],
  exports: [ComplaintService],
})
export class ComplaintModule {}
