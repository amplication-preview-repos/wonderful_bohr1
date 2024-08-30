import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResponseService } from "./response.service";
import { ResponseControllerBase } from "./base/response.controller.base";

@swagger.ApiTags("responses")
@common.Controller("responses")
export class ResponseController extends ResponseControllerBase {
  constructor(protected readonly service: ResponseService) {
    super(service);
  }
}
