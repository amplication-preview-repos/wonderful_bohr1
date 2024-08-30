import * as graphql from "@nestjs/graphql";
import { ResponseResolverBase } from "./base/response.resolver.base";
import { Response } from "./base/Response";
import { ResponseService } from "./response.service";

@graphql.Resolver(() => Response)
export class ResponseResolver extends ResponseResolverBase {
  constructor(protected readonly service: ResponseService) {
    super(service);
  }
}
