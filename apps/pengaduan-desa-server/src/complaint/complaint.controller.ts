import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ComplaintService } from "./complaint.service";
import { ComplaintControllerBase } from "./base/complaint.controller.base";

@swagger.ApiTags("complaints")
@common.Controller("complaints")
export class ComplaintController extends ComplaintControllerBase {
  constructor(protected readonly service: ComplaintService) {
    super(service);
  }
}
